import React, { useState } from 'react';

function FAQCard() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '50px'}}>
            <p style={{
                fontFamily: 'Arial',
                fontWeight: 'bold',
                fontSize: '70px',
                textAlign: 'center',
                marginTop: '120px',
                marginBottom: '200px'
            }}>FAQs</p>
            <FAQ title='FRIDAY는 어떤 방법으로 진행되나요?'>
                react vue angular 중 하나 이상 다뤄본 경험 Git을 이용한 프로젝트 관리 경험<br/>
                다지아너, 백엔드 개발자, 기획자와 소통 경험
            </FAQ>
            <FAQ title='FRIDAY는 어떤 방법으로 진행되나요?'>
                react vue angular 중 하나 이상 다뤄본 경험 Git을 이용한 프로젝트 관리 경험<br/>
                다지아너, 백엔드 개발자, 기획자와 소통 경험
            </FAQ>
            <FAQ title='FRIDAY는 어떤 방법으로 진행되나요?'>
                react vue angular 중 하나 이상 다뤄본 경험 Git을 이용한 프로젝트 관리 경험<br/>
                다지아너, 백엔드 개발자, 기획자와 소통 경험
            </FAQ>
        </div>
    )
}
export default FAQCard;

function FAQ(props) {
    const [expanded, setExpand] = useState(false)
    return (
        <div style={{display: 'flex', flexDirection: 'row', width: 'min(800px, 80vw)', marginBottom: '60px', borderBottom: '1px solid #888787'}}>
            <div style={{width: '46px', height: '46px', borderRadius: '10px', backgroundImage: 'linear-gradient(134deg, #01baae 9%, #044a27 90%)',
                        fontFamily: 'AdobeHebrew', fontSize: '23px', fontWeight: 'bold', textAlign: 'center', paddingTop: '7px'}}>Q</div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '30px', marginBottom: '30px', fontFamily: 'Arial'}}>
                <p style={{fontWeight: 'bold', fontSize: '22px', marginTop: '10px'}}>{props.title}</p>
                <p style={{fontSize: '16px', marginTop: '0px', color: '#888787'}}>{props.children}</p>
            </div>

        </div>
    )
}