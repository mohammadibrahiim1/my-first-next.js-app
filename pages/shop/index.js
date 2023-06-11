import Card from "@/Components/Card/ProductCard";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Checkbox, Col, Layout, Menu, Row, theme } from "antd";
// import  { CheckboxValueType } from "antd/es/checkbox/Group";

const plainOptions = ["Apple", "Pear", "Orange"];
const { Header, Content, Footer, Sider } = Layout;

const onChange = (checkboxValues) => {
  console.log("checked =", checkboxValues);
};

// const options = [
//   { label: "Apple", value: "Apple" },
//   { label: "Pear", value: "Pear" },
//   { label: "Orange", value: "Orange" },
// ];

// const optionsWithDisabled = [
//   { label: "Apple", value: "Apple" },
//   { label: "Pear", value: "Pear" },
//   { label: "Orange", value: "Orange", disabled: false },
// ];

export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};

const Shop = ({ products }) => {
  console.log(products);

  const {
    token: { colorBgContainer, colorBgLayout },
  } = theme.useToken();
  return (
    <div>
      <section className=" container mx-auto">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Layout>
          <Sider
            style={{ background: colorBgLayout }}
            width={240}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="demo-logo-vertical" />
            <Menu
              style={{ background: colorBgLayout }}
              //   theme="dark"
              mode="inline"
              //   defaultSelectedKeys={["4"]}
            />

            <div className="p-5">
              <hr />
              <h4 className="text-dark font-semibold ">Brands</h4>
              <Checkbox.Group
                style={{
                  width: "100%",
                }}
                onChange={onChange}
              >
                <Row>
                  <Col span={8} className="py-2">
                    <Checkbox value="A">Samsung</Checkbox>
                    <Checkbox value="B">Apple</Checkbox>
                    <Checkbox value="C">Oppo</Checkbox>
                    <Checkbox value="D">Dell</Checkbox>
                    <Checkbox value="E">Huawei</Checkbox>
                    <Checkbox value="E">Microsoft</Checkbox>
                    <Checkbox value="E">HP</Checkbox>
                    <Checkbox value="E">Infinix</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
              <hr />
            </div>
            <div className="p-5">
              <h4 className="text-dark font-semibold ">Category</h4>
              <Checkbox.Group
                style={{
                  width: "100%",
                }}
                onChange={onChange}
              >
                <Row>
                  <Col span={8} className="py-2">
                    <Checkbox value="A">SmartPhone</Checkbox>
                    <Checkbox value="B">Laptops</Checkbox>
                    <Checkbox value="C">Fragrances</Checkbox>
                    <Checkbox value="D">SkinCare</Checkbox>
                    <Checkbox value="E">Groceries</Checkbox>
                    <Checkbox value="E">Homedecor</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
              <hr />
            </div>
          </Sider>
          <Layout>
            <Content width={926} style={{ background: colorBgLayout }}>
              <div
                className="grid grid-cols-4 gap-5"
                style={
                  {
                    //   padding: 24,
                    //   minHeight: 360,
                    //   background: colorBgContainer,
                  }
                }
              >
                {/* <div className="grid grid-cols-4 gap-5"> */}
                {products.products.map((product) => (
                  <Card product={product} key={product.id}></Card>
                ))}
                {/* </div> */}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2023 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </section>
    </div>
  );
};

export default Shop;
