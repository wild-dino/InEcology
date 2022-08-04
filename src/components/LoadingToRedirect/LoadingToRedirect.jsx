import useRedirect from "hooks/useRedirect";

const LoadingToRedirect = () => {
    const count = useRedirect();

    return (
        <div>
            Redirect in {count}
        </div>
    )
};

export default LoadingToRedirect;