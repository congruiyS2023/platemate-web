import { Flex, Layout } from "antd";
import HeaderNav from "../components/HeaderNav"
import Paragraph from "../components/Paragraph";
import RedistributeCard from "../components/RedistributeCard";
import Caption from "../components/Caption";
import { useNavigate } from "react-router-dom";

const Community = () => {
    const explanationText = "Share your excessive food to feed the community!";

    const navigate = useNavigate();
    const handleNewpost = () => {
        navigate('/community/new');
    }

    const redistributionPosts = [
        {
            id: 1,
            name: "Apple Pie",
            ingredients: "Apple, sugar, butter",
            status: "Untouched",
            expirationDate: "11/20/2023",
            quantity: "5",
            unit: "lbs",
            expired: false,
        },
        {
            id: 2,
            name: "Apple Pie",
            ingredients: "Apple, sugar, butter",
            status: "Untouched",
            expirationDate: "11/20/2023",
            quantity: "5",
            unit: "lbs",
            expired: false,
        },
        {
            id: 3,
            name: "Apple Pie",
            ingredients: "Apple, sugar, butter",
            status: "Untouched",
            expirationDate: "11/20/2023",
            quantity: "5",
            unit: "lbs",
            expired: false,
        },
        {
            id: 4,
            name: "Apple Pie",
            ingredients: "Apple, sugar, butter",
            status: "Untouched",
            expirationDate: "11/20/2023",
            quantity: "5",
            unit: "lbs",
            expired: true,
        },
        {
            id: 5,
            name: "Apple Pie",
            ingredients: "Apple, sugar, butter",
            status: "Untouched",
            expirationDate: "11/20/2023",
            quantity: "5",
            unit: "lbs",
            expired: true,
        }
    ];

    const existingPosts = redistributionPosts.filter((post) => !post.expired);
    const expiredPosts = redistributionPosts.filter((post) => post.expired);

    return (
        <div>
            <HeaderNav header={"Sharing Board"} showPlusButton={true} plusButtonOnClick={handleNewpost} showLogOutButton={true} />
            <Layout.Content className="mx-6 space-y-6">
                <Paragraph>{explanationText}</Paragraph><Flex wrap="wrap" gap={"middle"} justify="center">
                    {existingPosts.map((post, _) => (
                        <RedistributeCard
                            key={post.id}
                            name={post.name}
                            ingredients={post.ingredients}
                            status={post.status}
                            expirationDate={post.expirationDate}
                            quantity={post.quantity}
                            unit={post.unit} />
                    ))}
                </Flex><Caption className={"justify-self-start"}>Past Posts</Caption><Flex wrap="wrap" gap={"middle"} justify="center">
                    {expiredPosts.map((post, _) => (
                        <RedistributeCard
                            key={post.id}
                            name={post.name}
                            ingredients={post.ingredients}
                            status={post.status}
                            expirationDate={post.expirationDate}
                            quantity={post.quantity}
                            unit={post.unit}
                            disabled={true} />
                    ))}
                </Flex>
            </Layout.Content>
        </div>
    );
};

export default Community;