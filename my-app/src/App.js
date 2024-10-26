import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import SearchPage from './page/User/SearchPage';
import {ProductDetailPage} from './page/User/ProductDetailPage';
import CartList from './page/User/cartlist';
import Login from './page/User/LoginPage';
import { useState } from 'react';
import MainPage from './page/User/MainPage';
import { AdminMain } from './page/Admin/AdminMain';
// import ProductListPage from './components/js/ProductListPage';
// import PaymentSuccess from './components/js/User/PaymentSuccess';
import { UserInfoPage } from './page/User/UserInfoPage';
import { OrderListPage } from './page/User/OrderListPage';
import { OrderPage } from './page/User/OrderPage';
import { UserDeliveryPage } from './page/User/UserDeliveryPage';
import SignupPage from './page/User/signupPage';
import { OrderDetailPage } from './page/User/OrderDetailPage'

import AdminOrderList from './Componunts/admin/order/OrderListPage'
import AdminOrderEdit from './Componunts/admin/order/OrderEditPage'
import AdminMemberList from './Componunts/admin/member/MemberListPage'
import AdminMemberEdit from './Componunts/admin/member/MemberEditPage'
import AdminProductList from './Componunts/admin/product/ProductListPage'
import AdminProductEdit from './Componunts/admin/product/ProductEditPage'

function App() {

  const [userType, setUserType] = useState(null);


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login setUserType={setUserType} />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/products/:categoryId' element={<SearchPage />} />
        <Route path='/product/detail/:id' element={<ProductDetailPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/cart' element={<CartList />} />
        <Route path='/mypage' element={<UserInfoPage />} />
        <Route path='/admin/dashboard' element={<AdminMain />} />
        <Route
          path='/redirect'
          element={
            userType === 'admin' ? <Navigate to='/admin/dashboard' /> : <Navigate to='/main' />
          }
        />
        <Route path='/orderlist' element={<OrderListPage />}/>
        <Route path='/order' element={<OrderPage />}/>
        <Route path='/delivery' element={<UserDeliveryPage />}/>
        <Route path='/order/detail/:id' element={<OrderDetailPage />} />
        {/* <Route path='/success' element={<PaymentSuccess />}/>   */}




        {/* <Route path='/admin/product/list' element={<ProductListPage />}/> */}
        <Route path='/admin/order/list' element={<AdminOrderList />} />
        <Route path='/admin/order/:id' element={<AdminOrderEdit />} />
        <Route path='/admin/member/list' element={<AdminMemberList />} />
        <Route path='/admin/member/:id' element={<AdminMemberEdit />} /> 
        <Route path='/admin/product/list' element={<AdminProductList />} />
        <Route path='/admin/product/:id' element={<AdminProductEdit />} /> 
      </Routes>
    </Router>

  );
}


export default App;
