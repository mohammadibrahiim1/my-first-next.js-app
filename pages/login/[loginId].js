import { useRouter } from "next/router";


const loginId = () => {
    const router = useRouter();
    const id = router.query.loginId;
    return (
        <div>
            <h1>this is login page {id}</h1>
        </div>
    );
};

export default loginId;