// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { Layout, Menu, theme } from "antd";
import React from "react";
// const { Header, Content, Footer, Sider } = Layout;
import { Grid } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch;
  console.log(cart.length);
  return (
    <div className="container mx-auto gap-1 overflow-hidden mt-12">
      <Grid className="">
        <Grid.Col className="bg-gray-100" md={6} lg={8}>
          cart product
        </Grid.Col>
        <Grid.Col className="bg-gray-100" md={6} lg={4}>
          cart calculation
        </Grid.Col>
        {/* <Grid.Col md={6} lg={3}>3</Grid.Col>
      <Grid.Col md={6} lg={3}>4</Grid.Col> */}
      </Grid>
    </div>
  );
};

export default Cart;
