import { MenuProps } from "antd/es/menu";
import { AppstoreOutlined, MailOutlined, SettingOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined, UserOutlined } from '@ant-design/icons';
import {Service} from '@/services'
const {apiEndpoints, primaryRoutes} = Service
export const HEADER_MENU: MenuProps['items'] = [
    {
      label: 'Navigation One',
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: 'alipay',
    },
];
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  title?: string,
  type?: 'group',
): MenuItem {
  return {
    title: title ? title : label,
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const SIDER_MENU : MenuProps['items'] = [
  getItem('Quản trị người dùng', primaryRoutes.admin.quanTriNguoiDung.root, <UserOutlined />, [
    getItem('Danh mục người dùng', primaryRoutes.admin.quanTriNguoiDung.coCauToChuc),
    getItem('Danh mục vai trò', primaryRoutes.admin.quanTriNguoiDung.vaiTro),
    getItem('Danh mục người dùng đơn vị', primaryRoutes.admin.quanTriNguoiDung.nguoiDungDonVi),
    getItem('TK từ CSDL dân cư', primaryRoutes.admin.quanTriNguoiDung.taiKhoanTuCSDLDanCu),
  ]),
  getItem('Dịch vụ', primaryRoutes.admin.root + apiEndpoints.dichvus, <PieChartOutlined />), // primaryRoutes, apiEndpoints sẽ được thay = dữ liệu lấy từ api
  getItem('Loại dịch vụ', primaryRoutes.admin.root + apiEndpoints.loaidichvus, <DesktopOutlined />),
  getItem('Kênh tin', primaryRoutes.admin.root + apiEndpoints.kenhtins, <ContainerOutlined />),
]