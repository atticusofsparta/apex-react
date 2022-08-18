import ViewerInner from "./viewerinner/Viewer-Inner"
import { ReactComponent as ButtonAddFolderIcon } from '../images/add-folder.svg';
import { ReactComponent as ButtonUploadFilesIcon } from '../images/upload-files.svg';


const AllFiles = () => {


    const demoLinks = []
    const demoPages = []
    return (
        <>
          <ViewerInner 
        viewName={"All Files"}
        buttons={[
      <button className=" button-top add-folder">Add Folder <ButtonAddFolderIcon /></button>,
      <button className="button-top upload-files">Upload Files  <ButtonUploadFilesIcon /></button>]}

        headerNames={["Icon","Name","Folder","Created,Size","File Count", "View File", "Actions"]}
        rows={demoLinks}
        pagination={demoPages}
        
        />
        </>
    )
}

export default AllFiles