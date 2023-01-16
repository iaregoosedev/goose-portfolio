import "./../Styles/prepublish.css"

export default function Prepublish() {
    return (
        <div className="container">
            <h1 className="test">Site not yet published.</h1>
            <p>You can view my Figma designs for this website <a className="link" href="https://www.figma.com/file/8AeSRTABrmWvzMmeASMDAl/goose-portfolio?node-id=1%3A2&t=8DTXVc0kJQ8ZrLHs-1" target="_blank">here</a>.</p>
            <iframe className="figma_iframe"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8AeSRTABrmWvzMmeASMDAl%2Fgoose-portfolio%3Fnode-id%3D1%253A2%26t%3D8DTXVc0kJQ8ZrLHs-1"
                allowFullScreen
            />
            <p>Controls for Figma iframe<br/>Left Click: Pan | ctrl + Scroll Wheel: Zoom</p>
            <p></p>
        </div>
    )
}