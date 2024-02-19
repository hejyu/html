# `HTML` `CSS`, `Javascript` 수업 내용


## 서버-클라이언트

- 웹서버: 정적 HTML 페이지 요청에 응답하기 위한 서버
- 웹애플리케이션 서버: 정적 HTML 페이지 + 동적인 요청(DB 서버 사용자 조회, 저장 등)에 응답 가능한 서버

### 동적 웹애플리케이션의 구조

![Client Server Image](images/client_server.png)

### 개발환경 Eclipse 셋팅

1. 작업 공간 workspace 생성
2. 이클립스 실행: eclipse.exe
    - 이클립스 인코딩: ISO-10646/Unicode(UTF-8) 셋팅
        - Window > Preference > General > Workspace
        - Window > Preference > Web: HTML, CSS, JSP Files
3. 웹 애플리케이션 서버(WAS) 설정 순서
    - Apache Tomcat 9.0 추가
        1. WAS 생성하는 순서
            1. Server 뷰(View)로 가기
            2. 새 서버 추가: 마우스 오른쪽 버튼 클릭 > New > Server
            3. 서버 유형 선택: 'Server type' 서버 타입 선택 창 > Apache 카테고리 선택 > Tomcat v9.0 Server 선택 > Next 클릭
            4. 서버 실행환경 셋팅
                - Server's host name: 웹애플리케이션을 테스트하기 위한 주소를 입력 ex) localhost
                - Server name: 식별 가능한 서버의 이름을 입력
                - Server location: Apache Tomcat 설치 경로를 설정
                    - JRE(Java Runtime Environment) 선택: 서버가 사용할 JRE를 선택 (보통 이클립스 기본 JRE 선택)
            5. 서버 추가 완료
            6. 웹애플리케이션 서버(Apache Tomcat) 실행
                - Server 뷰 > 서버 선택 > 'Start the server' 버튼을 클릭
            7. 실행 중인 웹애플리케이션 확인
                - 브라우저 > 'http://localhost:포트번호/' 접속
                - Apache Tomcat 서버에서 실행 중인 웹 애플리케이션 확인
            8. lombok.jar 설치 과정
                - 이클립스를 종료
                    - Specify location... 클릭 >  eclipse.exe 설치 경로 선택 후 확인 > Install/Update 클릭 > 나가기
                - exclipse.ini 파일 > lombok.jar 폴더 경로 생성 확인
                    - -javaagent:C:\Class231228\etc\eclipse\lombok.jar 경로 생성 확인
                - 이클립스 폴더 부모 폴더 중 한글 폴더명이 있는 경우 동작하지 않음
4. 객체: Object(객체의 집합)
    - [자바스크립트 객체 배열](day5_js/20_object.html)
    - [자바스크립트 요소 이벤트 핸들러](day6_js/23_addEventListenter.html)
    - [요소 이벤트 인자 e: e.target 속성](day6_js/24_evetTarget.html)
    - [자바스크립트 날짜 Date 객체](day6_js/25_date.html)
    - [자바스크립트: input date 타입 예제](day6_js/26_dateForm.html)

## 자바스크립트: form 요소, dom 메소드

- [자바스크립트: form 입력 정보 유효성 검사, 서버로 전송](day5_js/19_formValid.html)
    - input 입력 필드, 체크박스 필드, submit() 메소드
- [자바스크립트 요소 이벤트 핸들러](day6_js/23_addEventListenter.html)
- [요소 이벤트 인자 e: e.target 속성](day6_js/24_evetTarget.html)
- [자바스크립트 날짜 Date 객체](day6_js/25_date.html)
- [자바스크립트: input date 타입 예제](day6_js/26_dateForm.html)