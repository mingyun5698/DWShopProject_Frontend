import React from 'react'
import '../css/Info.css'

export const Userinfosubmenu = () => {
    return (
        <div>
            <div className="info-left-container">
                <h3>내 정보</h3>
                <ul>
                    <li><a href="/mypage">내 정보 보기</a></li>
                    <li><a href="/orderlist">주문내역 확인</a></li>
                    <li><a href="/Delivery">배송지 관리</a></li>
                </ul>
            </div>
        </div>
    )
}
