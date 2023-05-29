export default function ErrorPage(props) {
    return (
        <div className={"error-page"}>
            <div className={"error-title"}>There was an error!</div>
            <div> {"Code: " + props.error.code}</div>
            <div>{"Name: " + props.error.name}</div>
            <div>{"Message: " + props.error.message}</div>
            <div>{"Stack: " + props.error.stack}</div>
            {props.error.response ?
                <>
                    <div>{"Data error: " + props.error.response.data.error}</div>
                    <div>{"Status: " + props.error.response.status}</div>
                </>
                : null
            }
            {props.error.request ?
                <>
                    <div>{"responseURL: " + props.error.request.responseURL}</div>
                </>
                : null
            }
            {props.resetErrorBoundary && (
                <div>
                    <button className={"button-reload"} onClick={props.resetErrorBoundary}>
                        Reload page
                    </button>
                </div>
            )}
        </div>
    );
}
