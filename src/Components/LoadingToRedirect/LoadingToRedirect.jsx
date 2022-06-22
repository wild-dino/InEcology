import useRedirect from "Hooks/useRedirect";

const LoadingToRedirect = () => {
    const count = useRedirect();

    return (
        <div>
            Redirect in {count}
        </div>
    )
};

export default LoadingToRedirect;