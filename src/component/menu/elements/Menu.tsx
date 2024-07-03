
import ContactBtn from './ContactButton';
import MenuItem from './MenuItem';

function Menu (){

    return (<>
        <MenuItem title={"About"}/>
        {/* <MenuItem title={"Projects"}/> */}
        <MenuItem title={"Services"}/>
        <ContactBtn title={"ContactMe"} />
        </>);
}

export default Menu;