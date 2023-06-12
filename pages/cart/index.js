
import { Grid } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";

const Cart = (props) => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  const products = useSelector((state) => state.cart);
  console.log(products);
  const dispatch = useDispatch();
  // console.log(cartItems.length);
  return (
    <div className="container mx-auto gap-1 overflow-hidden mt-12">
      <Grid className="">
        <Grid.Col className="bg-gray-100" md={6} lg={8}>
          <div>
            {products.length === 0 ? (
              <h1>Your cart is Empty! </h1>
            ) : (
              <>
                {products.map((item) => (
                  <div>
                    <Card
                      direction={{ base: "column", sm: "row" }}
                      overflow="hidden"
                      variant="outline"
                    >
                      <Image
                        objectFit="cover"
                        maxW={{ base: "100%", sm: "200px" }}
                        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                        alt="Caffe Latte"
                      />

                      <Stack>
                        <CardBody>
                          <Heading size="md">The perfect latte</Heading>

                          <Text py="2">
                            Caffè latte is a coffee beverage of Italian origin
                            made with espresso and steamed milk.
                          </Text>
                        </CardBody>

                        <CardFooter>
                          <Button variant="solid" colorScheme="blue">
                            Buy Latte
                          </Button>
                        </CardFooter>
                      </Stack>
                    </Card>
                  </div>
                ))}
              </>
            )}
          </div>
        </Grid.Col>
        <Grid.Col className="bg-gray-100" md={6} lg={4}>
          cart calculation
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Cart;
