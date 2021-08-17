import { FC, memo } from "react";
interface Props {
}
const EditProfile: FC<Props> = (props) => {
    return (
        <div className="">
            <h1>This is edit profile page</h1>
        </div>
    );
};
EditProfile.defaultProps = {
}
export default memo(EditProfile);
export { };