import { Categories } from "./categories"
import { Instagram } from "./instagram"
import { LatestPost } from "./latestPost"
import { Tags } from "./tags"

export const Sidebar = () => {
    return (
        <div className="col-lg-4 max-width">
            <LatestPost />

            <Categories />

            <Instagram />

            <Tags />
        </div>

    )
}