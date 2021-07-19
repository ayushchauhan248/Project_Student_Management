import {FC , memo}  from  "react";

interface Props {}

const NotFound: FC<Props> = (props) => {
    return(
        <div className="bg-green-300 h-screen w-screen">
            sorry the page is not found
        </div>
        
    );
};
NotFound.defaultProps = {}

export default memo(NotFound);