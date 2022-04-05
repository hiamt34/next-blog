/* eslint-disable @next/next/no-img-element */
export const Item = () => {
    return (
        <li className="comment-item">
            <img src="assets/img/user/1.jpg" alt=".." />
            <div className="content">
                <ul className="info list-inline">
                    <li>Mohammed Ali</li>
                    <li className="dot" />
                    <li> January 15, 2021</li>
                </ul>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod
                    non fugiat aliquid sit similique!
                </p>
                <div>
                    <a href="#" className="link">
                        <i className="arrow_back" /> Reply</a>
                </div>
            </div>
        </li>
    )
}