import {FC , memo}  from  "react";

interface Props {}

const Sidebar: FC<Props> = (props) => {
    return(
        <div className="h-screen w-80 bg-gray-400 ">
          this is side bar
        </div>
        
    );
};

Sidebar.defaultProps = {}

export default memo(Sidebar);