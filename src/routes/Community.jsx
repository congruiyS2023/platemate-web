import { Flex, Layout } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Caption from "../components/Caption";
import HeaderNav from "../components/HeaderNav";
import Paragraph from "../components/Paragraph";
import RedistributeCard from "../components/RedistributeCard";

const Community = () => {
    const explanationText = "Share your excessive food to feed the community!";

    const navigate = useNavigate();
    const handleNewPost = () => {
        navigate('/community/new');
    }

    const examplePosts = [
        {
            id: "a6e36681-fc80-4595-ab3d-961d08389be9",
            name: "apple pie",
            ingredients: "Apple, sugar, butter",
            status: "untouched",
            expirationDate: "2023-12-04",
            quantity: 5,
            unit: "lbs",
            expired: false,
        },
        {
            id: "206538c8-7e65-447a-91c9-25bc6f47f78f",
            name: "Banana Bread",
            ingredients: "Banana, flour, eggs",
            status: "touched",
            expirationDate: "2023-11-10",
            quantity: 2,
            unit: "lbs",
            expired: true
        },
        {
            id: "792bc0c3-fbc8-4c8a-b8e9-f82d9ef7fce4",
            name: "Carrot Cake",
            ingredients: "Carrot, sugar, cream cheese",
            status: "untouched",
            expirationDate: "2023-11-20",
            quantity: 3,
            unit: "servings",
            expired: true
        }
    ];

    const [posts, setPosts] = useState(() => {
        const storedPosts = localStorage.getItem('redistributionPosts');
        return storedPosts ? JSON.parse(storedPosts) : examplePosts;
    });
    posts.sort((a, b) => { return new Date(b.expirationDate) - new Date(a.expirationDate) });
    const [existingPosts, setExistingPosts] = useState(examplePosts.filter((post) => !post.expired));
    const [expiredPosts, setExpiredPosts] = useState(examplePosts.filter((post) => post.expired));

    useEffect(() => {
        localStorage.setItem('redistributionPosts', JSON.stringify(posts));
        posts.sort((a, b) => { return new Date(b.expirationDate) - new Date(a.expirationDate) });
        setExistingPosts(posts.filter((post) => !post.expired));
        setExpiredPosts(posts.filter((post) => post.expired));
    }, [posts]);

    const handleOnClickRedistributeCard = (id) => {
        navigate(`/community/${id}/edit`);
    }

    const handleIncrement = (id) => {
        const newPosts = posts.map((post) => {
            if (post.id === id) {
                return {
                    ...post,
                    quantity: post.quantity + 1
                }
            }
            return post;
        });
        setPosts(newPosts);
    };

    const handleDecrement = (id) => {
        const newPosts = posts.map((post) => {
            if (post.id === id) {
                return {
                    ...post,
                    quantity: post.quantity - 1
                }
            }
            return post;
        });
        setPosts(newPosts);
    }

    return (
        <div>
            <HeaderNav header={"Sharing Board"} showPlusButton={true} plusButtonOnClick={handleNewPost} showLogOutButton={true} />
            <Layout.Content className="mx-6 space-y-6">
                <Paragraph>{explanationText}</Paragraph>
                {existingPosts.length === 0 && <Paragraph>Click on the Add button on top right to publish a new post!</Paragraph>}
                <Flex wrap="wrap" gap={"middle"} justify="center">
                    {existingPosts.map((post, _) => (
                        <RedistributeCard
                            onClickRedistributeCard={() => handleOnClickRedistributeCard(post.id)}
                            onIncrement={() => handleIncrement(post.id)}
                            onDecrement={() => handleDecrement(post.id)}
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