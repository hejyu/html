# 게시판 - `JSP` `Servlet` `Maven` `비동기REST-API`


## 1. 데이터 준비


## 2. 로컬 작업디렉토리 생성
- **git clone : https://github.com/kimsohee-around/DemoProject.git**   
    1. git perspective 이동 > 초록색 아이콘 클릭 
    1. DemoProject 디렉토리 선택 > WorkingTree 우클릭 > Import Project

## 3. 프로젝트 개발 환경 셋팅
- **톰캣 서버 추가**
    1. Build Path > Libraries > Classpath > Add Library ... > Server Runtime 추가

- **Tema - Fetch from origin**
    - 변경점을 확인한다

- **Tema - Pull**
    - 프로젝트를 업데이트

## 4. 소스 분석
### 1. List Controller 

**파라미터 GET**

- 어떤 메뉴 또는 링크로 전달되는지?
- 어떤 값인지 ?
    request.getParameter('page') : 페이지 번호 
    파라미터 page 가 없을 때 기본값 1 
    **1. header.jsp 38번줄 링크로 list.jsp 페이지로 전환**

    **2. read.jsp 67번줄 링크로 파라미터 page 전달**

    **3. write.jsp 43번줄 링크로 파라미터 page 전달**

    **4. list.jsp 106번,109번,114번,118번,121번 링크로 파라미터 page 전달**


**애트리뷰트(request scope)**
- list : 페이징 목록
- paging : 페이지 목록(현재페이지번호, 전체글수, 페이지 글 개수...) 
- today : 현재날짜시간 list.jsp 62번줄에서 사용함

### 2. Read Controller

**파라미터 GET**

- 어떤 메뉴 또는 링크로 전달되는지?
- 어떤 값인지 ?

    request.getParameter('idx') : 요청글 idx 값 
    request.getParameter('page') : 요청글 페이지 위치 

    **북챗 메뉴 list.jsp에 47번줄에서 /couuminty/read?idx= &page= 링크로 파라미터 `idx : 글번호`, `page : 현재페이지` 전달**

**애트리뷰트(request scope)**
- vo :  선택된 idx(메인글 글번호)로 조회한 글을 가져온 글 객체(글제목, 내용, 작성자, 작성날짜 포함)
- cmtlist : 선택된
 idx의 댓글
- page : 파라미터로 받은 현재 페이지번호


### 3. Write Controller 

**파라미터 GET**

- 어떤 메뉴 또는 링크로 전달되는지?
- 어떤 값인지 ? 

    request.getParameter('page') : 요청글 페이지 위치 

    **북챗메뉴 list.jsp 95번줄에서 /couuminty/write?page= 링크로 파라미터 `page` 전달**


**애트리뷰트(request scope)**
- page : 파라미터로 받은 현재 페이지번호


### 4. Member Service

**java security. MessageDigest : sha256 해시함수 제공 API**

- 암호화 : 평문 -> 알고리즘 -> 암호문(가독X)
- 복호화 : 암호문 -> 알고리즘 -> 평문
- 해싱 : 평문 -> 해싱함수로 이동 -> 같은 평문에 대해 가독불가능 같은 문자열(암호문). 암호화된 문자열이 다시 평문으로 복구는 못한다.
- 해싱 함수 
    - sha256 해싱함수 : 암호문 문자열을 256비트 16진수 64개문자로 만든다.

```java
public String encrypt(String text) throws NoSuchAlgorithmException {

    // 1.실행 객체 생성
    MessageDigest md = MessageDigest.getInstance("SHA-256");
    // 2. 평문을 저장
    md.update(text.getBytes());
    // md.digest() 메소드가 해싱함수를 실행한다. 해싱 결과가 buyte[]

    return bytesToHex(md.digest());
}

private String bytesToHex(byte[] bytes) {
    StringBuilder builder = new StringBuilder();
    for (byte b : bytes) {
        // 바이트 배열에서 1 바이트씩 가져와 16진수 2자리 문자로 변환
        builder.append(String.format("%02x", b));
    }
    return builder.toString();
}

```
#### 용도 : 비밀번호 암호화에 사용


### 5. LoginActionController : Session 과 Cookie, 브라우저
**사용자 브라우저가 서버 http://localhost:8088/DemoProject url로 처음 요청을 보내면 톰캣은 이 브라우저를 식별하기 위해서 JSESSONID 값을 생성하고 (JESSIONID, 생성값) 한쌍을 브라우저 쿠키 저장소에 저장하도록 응답을 보낸다.
그 이후에는 사용자가 브라우저가 동일한 URL로 요청을 보낼때 마다,
JSESSIONID 값을 함께 서버로 보낸다. 서버는 JSESSIONID 값이 같으면 동일 
세션이라고 취급을 한다.
애트리뷰트를 SESSION SCOPE에 저장하면, `JSESSIONID 값이 같은 동안`에는
애트리뷰트 값이 유지가 된다. (아주 중요!)**

**브라우저의 Application - Local Strorage와 Session storage는 브라우저에 저장하는 값들이고 session 애트리뷰트는 서버에 저장하는 값들이다.**

```java
if(user != null) {		
    //로그인 성공. 로그인 사용자 정보를 서버의 세션 저장소에 저장
    session.setAttribute("user",user);  //핵심.
    url =  request.getContextPath();
}else {	Cookie cookie = new Cookie("incorrect","y");
cookie.setPath("/");		//쿠키 저장 경로
response.addCookie(cookie); // 로그인 요청 응답으로 브라우저의 쿠키를 보낸다. (브라우저는 애플리케이션 쿠키 스토리지에 쿠키를 저장한다.)
```
**로그인 실패시 login.jsp 스크립트 안에서 Cookie 삭제 만료기한을 줘서 쿠키를 바로 사라지게 한다.**
```javascript
// login.jsp
/* 쿠키에 저장된 로그인 실패 정보 확인. el에 쿠키 객체 cookie가 지원되므로 해당 쿠키 이름 지정하여 사용합니다. */
console.log('${cookie.incorrect}')
if('${cookie.incorrect.value}'==='y') {
    document.getElementById('incorrect').style.display='inline-block';
    /* 쿠키삭제 */
    document.cookie = 'incorrect' + "=; expires=Thu, 01 Jan 1970 00:00:10 GMT; path=/;";
}
console.log('incorrect','${cookie.incorrect.value}')
```

```javascript
// list.jsp
let yn
// 로그인 후 저장된 세션 애트리뷰트 url
if('${user.userid}'==''){
    yn=confirm('글쓰기는 로그인이 필요합니다. 로그인 하시겠습니까?')
    /* 로그인 후 글쓰기로 돌아가기 */
    if(yn) {
        // 로그인 후 글쓰기 화면 다시 요청하기 위해 url을 브라우저에 저장하기
        sessionStorage.setItem('back', './community/write');
        // 

        location.href='../login'  
    }
}else{
    location.href='write?page=${paging.currentPage }'
}
```

```jsp
header.jsp
<-- sessionScope.user는 user로만 써도됨. 
sessionScope는 명시적으로 user가 session 애트리뷰트라고 지정해주는 표현이다. -->
<c:if test="${sessionScope.user == null }">		
    <li><a href="${pageContext.request.contextPath }/join"><span>회원가입</span></a></li>
    <li><a href="${pageContext.request.contextPath }/login">로그인</a></li>
</c:if>	

```


------
---

## 자신의 git Repository로 fork 저장소 push하는 법
    
1. DemoProejct 디렉토리 우클릭 > Open git bash Here

1. git remote -v 
    - 연결된 git 저장소 확인
    
1. git remote add uprepo https://github.com/hejyu/DemoProject.git 
    - uprepo 저장소로 현재 git 주소를 자신의 git 주소로 연결

1. git remote -v
    - 자신의 git 저장소 추가된 것 확인 

1. git push uprepo main
    - uprepo 저장소의 main 브랜치로 프로젝트 푸쉬

    ![alt text](image-15.png)


## `git Fork` :  다른 사람 git repository 저장소를 내 저장소로 가져오는 것
- 저장소가 내 저장소로 동기화 된다.

1. git 저장소 - Fork 클릭
- 저장소이름 입력 > Create

    ![alt text](image-16.png)


## git `브랜치` 생성(create), 병합(merge)

### 생성(create)
- git bash에서 추가하기

    1. 프로젝트 디렉토리 우클릭 > open git bash here 
    - `git switch -c mybranch` : mybranch 라는 이름으로 브랜치를 생성하고 현재 브랜치를 mybranch로 변경한다
    ![alt text](image-20.png)

- Eclipse git perspective에서 추가하기
    1. Branches > Local : 마우스 우클릭 > Switch to > New Branch..

**브랜치 용도**
- `main : pull만 받는 용도`
- `mybranch : 로컬에서 테스트하는 용도, 주석은 따로 메모장 만들어서 작성`

### mybranch 소스 수정 후 mybranch로 커밋하는 법

1. 커밋할 소스 Stage하고 `Commit만` 진행. 
    
    ![alt text](image-17.png)

1. Branch - Local - `mybranch` 마우스 우클릭 >  `Push Branch`

    ![alt text](image-18.png)

1. Remote : 자신의 저장소로 변경 후 Preview 클릭 > mybranch 브랜치로 푸쉬 확인

    ![alt text](image-19.png)


### 브랜치 이동 : `main 브랜치 선택 > checkout` 

1. 디렉토리 우클릭 - Fetch from origin

1. 디렉토리 우클릭 - Pull..


## 병합(Merge) : 브랜치와 브랜치를 합침
### main 에서 pull 받고 mybranch에 합치기

1. `mybranch`로 `체크아웃`한다.

    **stash 한 파일이 체크아웃 하면서 날라간경우 (원복 후의 충돌 라인을 수정이 발생할 수 있다.**

1. `mybranch`에서 `Merge` 클릭

    ![alt text](image-21.png)
    ---
    **충돌 파일 발생하는 경우 해결 방법**
    1. `Git Staging 뷰로 이동` > 충돌 파일 선택
    1. `>>> Head 변경점 라인만 남기고 소스 삭제`
    1. `import 다 지우고, ctrl+shift+o import 다시 불러오기`
    1. `오류 없으면 커밋만 클릭`
    1. `mybrach 브랜치 확인하고 Push Head... 클릭`(**3. `디렉토리` > `Push to uprepo` 클릭와 같음.**)
    ---


1. `디렉토리` > `Push to uprepo` 클릭
![alt text](image-22.png)

**테스트하는 코드는 항상 이 순서를 거쳐서 mybranch에서만 작업합니다.**  
1. mybranch를 main에 합치기


