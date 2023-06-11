import Card from "@/Components/Card/ProductCard";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Checkbox, Layout, Menu, theme } from "antd";
// import  { CheckboxValueType } from "antd/es/checkbox/Group";

const plainOptions = ["Apple", "Pear", "Orange"];
const { Header, Content, Footer, Sider } = Layout;

const onChange = () => {
  console.log("checked = ", checkedValues);
};

const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
];

const optionsWithDisabled = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", disabled: false },
];

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
      <section
        className=" container mx-auto"
       
      >
       
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

            <Checkbox.Group
              options={plainOptions}
              defaultValue={["Apple"]}
              onChange={onChange}
            />
            <br />
            <br />
            <Checkbox.Group
              options={options}
              defaultValue={["Pear"]}
              onChange={onChange}
            />
            <br />
            <br />
            <Checkbox.Group
              options={optionsWithDisabled}
              disabled
              defaultValue={["Apple"]}
              onChange={onChange}
            />
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
