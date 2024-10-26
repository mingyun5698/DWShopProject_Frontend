import React, { useEffect, useState } from 'react';
import '../../Componunts/css/member.css';
import Logo from '../../assets/3.png';
import UsernameIcon from '../../assets/name.png';
import EmailIcon from '../../assets/mail.png';
import PasswordIcon from '../../assets/password.png';
import PhoneIcon from '../../assets/phone.png';
import GentderIcon from '../../assets/gender.png';
import BirthIcon from '../../assets/birth.png';
import IdIcon from '../../assets/id.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {

    const navigate  = useNavigate();
    const [formData, setFormData] = useState({
        memberName: '',
        memberId: '',
        password: '',
        confirmPassword: '',
        birthdate: '',
        gender: '',
        email: '',
        contact: '',
        address: ''
    });

    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });


        // 이메일 형식 검증
        if (name === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                setEmailError('올바른 이메일 형식이 아닙니다!');
            } else {
                setEmailError('');
            }
        }
    };

    // 비밀번호와 비밀번호 확인이 일치하지 않을 때 오류 메시지 표시
    useEffect(() => {
        if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
            setPasswordError('X 비밀번호가 일치하지 않습니다!');
        } else {
            setPasswordError('');
        }
    }, [formData.password, formData.confirmPassword]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다!');
            return;
        }
        if (emailError) {
            alert('올바른 이메일 형식을 입력해주세요!');
            return;
        }
        
        const { confirmPassword, ...userData } = formData;

        axios.post('http://localhost:8080/api/signup', userData)
        .then(Response => {
            console.log('회원가입 성공:', Response.data);
            navigate('/');
            
        })
        .catch(error => {
            console.log('회원가입 오류:', error.Response.data)
            setEmailError('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.')
        })
    };

    return (
        <div className='signup-wrap'>

            <form onSubmit={handleSubmit} className="signup-form">
                <img src={Logo} alt="Logo" className="member-logo" />
                <div className="form-group input-group">
                    <img src={UsernameIcon} alt="UsernameIcon" className="input-icon" />
                    <input
                        type="text"
                        name="memberName"
                        value={formData.memberName}
                        onChange={handleChange}
                        placeholder="이름"
                        required
                    />
                </div>
                <div className="form-group input-group">
                    <img src={IdIcon} alt="UsernameIcon" className="input-icon" />
                    <input
                        type="text"
                        name="memberId"
                        value={formData.memberId}
                        onChange={handleChange}
                        placeholder="아이디"
                        required
                    />
                </div>
                <div className="form-group input-group">
                    <img src={PasswordIcon} alt="PasswordIcon" className="input-icon" />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="비밀번호"
                        required
                    />
                </div>
                <div className="form-group input-group">
                    <img src={PasswordIcon} alt="PasswordIcon" className="input-icon" />
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="비밀번호 확인"
                        required
                    />
                    <p className="error-message">{passwordError}</p>
                </div>
                <div className="form-group input-group">
                    <img src={BirthIcon} alt="UsernameIcon" className="input-icon" />
                    <input
                        type="text"
                        name="birthdate"
                        value={formData.birthdate}
                        onChange={handleChange}
                        placeholder="생년월일( '001234' 형식으로 입력)"
                        required
                    />
                </div>
                <div className="form-group input-group">
                    <img src={PhoneIcon} alt="PhoneIcon" className="input-icon" />
                    <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="휴대폰 번호(' - ' 없이 입력)"
                        required
                    />
                </div>

                <div className="form-group input-group" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={GentderIcon} alt="PhoneIcon" className="input-icon" />
                    <label style={{ display: 'flex', alignItems: 'center', gap: '5px',  marginLeft: '5px'}}>
                        <input type="radio" name="gender" value="Male" onChange={handleChange} required />
                        Male
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <input type="radio" name="gender" value="Female" onChange={handleChange} required />
                        Female
                    </label>
                </div>

                <div className="form-group input-group">
                    <img src={EmailIcon} alt="EmailIcon" className="input-icon" />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="이메일"
                        required
                    />
                    
                </div>
                <div className="form-group input-group" style={{ display: 'none' }}>
    <img src={EmailIcon} alt="addressicon" className="input-icon" />
    <input
        type="text"
        name="address"
        value={1} // value를 1로 설정
        onChange={handleChange}
        placeholder="주소"
        required
    />
</div>
                <button type="submit">가입</button>
            </form>
        </div>
    );
};

export default SignupPage;
