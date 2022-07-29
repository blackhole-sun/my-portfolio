import './index.scss';
import Sidebar from '../sidebar';
import { Outlet } from 'react-router-dom';

const  Layout = () => {
    return <div className='App'><Sidebar/>
    <div className='pages'>

        <span className='tags top-tags'>
        &lt;/body&gt;
        <br/>
        <span className='buttom-tag-html'
>        &lt;/html&gt;
</span>
        </span>
        <Outlet/>
        <span className='tags bottom-tags'></span>

    </div>
    </div>
}
export default Layout;