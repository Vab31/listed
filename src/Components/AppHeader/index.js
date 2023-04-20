import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Button, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";
import { useAuth0 } from "@auth0/auth0-react";

function AppHeader() {
    const { user, logout } = useAuth0();
    console.log(user)
    const [comments, setComments] = useState([]);
    const [orders, setOrders] = useState([]);
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    useEffect(() => {
        getComments().then((res) => {
            setComments(res.comments);
        });
        getOrders().then((res) => {
            setOrders(res.products);
        });
    }, []);

    return ( <
        div className = "AppHeader" >
        <
        Image width = { 40 }
        src = "https://ww1.prweb.com/prfiles/2013/09/20/11134750/etl-logo.gif" >
        < /Image> <
        Typography.Title > Listed 's Dashboard</Typography.Title> <
        Button varient = "contained"
        onClick = {
            () => logout({ returnTo: window.location.origin }) } > Logout < /Button> <
        Space >
        <
        Badge count = { comments.length }
        dot >
        <
        MailOutlined style = {
            { fontSize: 24 } }
        onClick = {
            () => {
                setCommentsOpen(true);
            }
        }
        /> <
        /Badge> <
        Badge count = { orders.length } >
        <
        BellFilled style = {
            { fontSize: 24 } }
        onClick = {
            () => {
                setNotificationsOpen(true);
            }
        }
        /> <
        /Badge> <
        /Space> <
        Drawer title = "Comments"
        open = { commentsOpen }
        onClose = {
            () => {
                setCommentsOpen(false);
            }
        }
        maskClosable >
        <
        List dataSource = { comments }
        renderItem = {
            (item) => {
                return <List.Item > { item.body } < /List.Item>;
            }
        } >
        < /List> <
        /Drawer> <
        Drawer title = "Notifications"
        open = { notificationsOpen }
        onClose = {
            () => {
                setNotificationsOpen(false);
            }
        }
        maskClosable >
        <
        List dataSource = { orders }
        renderItem = {
            (item) => {
                return ( <
                    List.Item >
                    <
                    Typography.Text strong > { item.title } < /Typography.Text> has been
                    ordered!
                    <
                    /List.Item>
                );
            }
        } >
        < /List> <
        /Drawer> <
        /div>
    );
}
export default AppHeader;