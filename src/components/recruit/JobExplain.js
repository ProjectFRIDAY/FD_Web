import React from 'react';
import styled from 'styled-components';
import * as Text from './Text'

export const Designer = () => {
    return (
        <div>
            <ExplainJob title="활동">
                팀 내에서 디자인을 담당합니다.<br/>
                Back-End, 기획, 디자인분들과 함께 프로젝트를 진행
            </ExplainJob>
            <ExplainJob title="기술">
                HTML과 CSS 기본을 이해하고,<br/>
                자바스크립트로 프로젝트를 해보고 싶은 분
            </ExplainJob>
            <ExplainJob title="이런 분이면 더 좋아요">
                React, Vue.js, Angular 중 하나 이상 다뤄 본 경험<br/>
                git을 이용한 프로젝트 관리 경험<br/>
                디자이너, 백엔드 개발자, 기획자와 소통 경험<br/>
            </ExplainJob>
        </div>
    )
}
export const Planner = () => {
    return (
        <div>
            <ExplainJob title="활동">
                팀 내에서 기획을 담당합니다.<br/>
                Back-End, 기획, 디자인분들과 함께 프로젝트를 진행
            </ExplainJob>
            <ExplainJob title="이런 분이면 더 좋아요">
                React, Vue.js, Angular 중 하나 이상 다뤄 본 경험<br/>
                git을 이용한 프로젝트 관리 경험<br/>
                디자이너, 백엔드 개발자, 기획자와 소통 경험<br/>
            </ExplainJob>
        </div>
    )
}
export const Android = () => {
    return (
        <div>
            <ExplainJob title="활동">
                팀 내에서 안드로이드 개발을 담당합니다.<br/>
                Back-End, 기획, 디자인분들과 함께 프로젝트를 진행
            </ExplainJob>
            <ExplainJob title="기술">
                HTML과 CSS 기본을 이해하고,<br/>
                자바스크립트로 프로젝트를 해보고 싶은 분
            </ExplainJob>
        </div>
    )
}
export const IOS = () => {
    return (
        <div>
            <ExplainJob title="활동">
                팀 내에서 iOS 개발을 담당합니다.<br/>
                Back-End, 기획, 디자인분들과 함께 프로젝트를 진행
            </ExplainJob>
            <ExplainJob title="기술">
                HTML과 CSS 기본을 이해하고,<br/>
                자바스크립트로 프로젝트를 해보고 싶은 분
            </ExplainJob>
            <ExplainJob title="이런 분이면 더 좋아요">
                React, Vue.js, Angular 중 하나 이상 다뤄 본 경험<br/>
                git을 이용한 프로젝트 관리 경험<br/>
                디자이너, 백엔드 개발자, 기획자와 소통 경험<br/>
            </ExplainJob>
        </div>
    )
}
export const FrontEnd = () => {
    return (
        <div>
            <ExplainJob title="활동">
                팀 내에서 웹 프론트엔드 개발을 담당합니다.<br/>
                Back-End, 기획, 디자인분들과 함께 프로젝트를 진행
            </ExplainJob>
            <ExplainJob title="기술">
                HTML과 CSS 기본을 이해하고,<br/>
                자바스크립트로 프로젝트를 해보고 싶은 분
            </ExplainJob>
            <ExplainJob title="이런 분이면 더 좋아요">
                React, Vue.js, Angular 중 하나 이상 다뤄 본 경험<br/>
                git을 이용한 프로젝트 관리 경험<br/>
                디자이너, 백엔드 개발자, 기획자와 소통 경험<br/>
            </ExplainJob>
        </div>
    )
}
export const BackEnd = () => {
    return (
        <div>
            <ExplainJob title="활동">
                팀 내에서 백엔드 개발을 담당합니다.<br/>
                Back-End, 기획, 디자인분들과 함께 프로젝트를 진행
            </ExplainJob>
            <ExplainJob title="기술">
                HTML과 CSS 기본을 이해하고,<br/>
                자바스크립트로 프로젝트를 해보고 싶은 분
            </ExplainJob>
            <ExplainJob title="이런 분이면 더 좋아요">
                React, Vue.js, Angular 중 하나 이상 다뤄 본 경험<br/>
                git을 이용한 프로젝트 관리 경험<br/>
                디자이너, 백엔드 개발자, 기획자와 소통 경험<br/>
            </ExplainJob>
        </div>
    )
}

const ExplainJobTitle = styled(Text.SmallBold)`
    font-size: 22px;
`
function ExplainJob(props) {
    return (
        <div>
            <ExplainJobTitle>{props.title}</ExplainJobTitle>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '50px'}}>
                <div style={{width: '0', height: '13px', border: '1px solid #7e7c7c', marginTop: '7px'}}/>
                <Text.Small style={{margin: '0', paddingLeft: '20px'}}>{props.children}</Text.Small>
            </div>
        </div>
    )
}