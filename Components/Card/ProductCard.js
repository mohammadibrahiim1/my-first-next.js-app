import {
  // EditOutlined,
  // EllipsisOutlined,
  // SettingOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  console.log(product);
  const { thumbnail, brand, category, title, price, stock, description } =
    product;
  return (
    <div>
      <Card
        style={{
          width: 300,
          height: 405,
        }}
        cover={
          <img
            // className="mx-auto"
            alt="example"
            src={thumbnail}
            style={{
              width: 300,
              height: 230,
            }}
          />
        }
        actions={[
          <Meta description={brand.slice(0, 10)} key="setting" />,

          <Meta description={category.slice(0,10)} key="edit" />,
          // <EllipsisOutlined key="ellipsis" />,
          <HeartOutlined key="ellipsis" />,
        ]}
      >
        <div className="flex justify-between items-center ">
          <Meta
            avatar={<Avatar src={thumbnail} />}
            title={title.slice(0, 23)}
            description={price}
          />
          <Meta
            className="pt-8"
            // avatar={<Avatar src={thumbnail} />}
            // title={title}
            description={stock}
          />
        </div>
        <div>
          <Meta className="pt-3" description={description.slice(0, 30)} />
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
