import React from 'react'

const ErrorPage = (props: { resetErrorBoundary: React.MouseEventHandler<HTMLButtonElement> | undefined }) => {
    return (
        <div>
            <p>There was an error!</p>
            {props.resetErrorBoundary && (
                <>
                    <button onClick={props.resetErrorBoundary}> Recover       </button>
                </>
            )}
        </div>
    )
}

ErrorPage.propTypes = {

}

export default ErrorPage;
