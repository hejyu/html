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

---

## 자신의 git Repository로 푸쉬
    
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


## git `브랜치` 생성, 병합

### 생성
- git bash

    1. 프로젝트 디렉토리 우클릭 > open git bash here 
    - `git switch -c mybranch` : mybranch 라는 이름으로 브랜치를 생성하고 현재 브랜치를 mybranch로 변경한다
    ![alt text](image-20.png)

- git perspective (Eclipse)
    1. Branches > Local : 마우스 우클릭 > Switch to > New Branch..

**브랜치 용도**
- main : pull 받는 용
- mybranch : 로컬에서 테스트하는 용도, 주석은 따로 메모장 만들어서 작성

**mybranch - 소스 수정 후 커밋**

1. 소스 Stage 후 `Commit만` 진행. 
![alt text](image-17.png)

1. Branch - Local - `mybranch` 마우스 우클릭 >  `Push Branch`
![alt text](image-18.png)

1. Remote : 자신의 저장소로 변경 후 Preview 클릭 > mybranch 브랜치로 푸쉬 확인
![alt text](image-19.png)


### 브랜치 이동 : `main 브랜치 선택 > checkout` 
1. 디렉토리 우클릭 - Fetch from origin

1. 디렉토리 우클릭 - Pull..


## 병합(Merge)
- 브랜치와 브랜치를 합치기
1. main 을 mybranch 에 합치기

    1. mybranch로 체크아웃
    
    1. mybranch에서 `Merge` 클릭
    ![alt text](image-21.png)


    1. 디렉토리 > `Push to uprepo` 클릭
    ![alt text](image-22.png)

**테스트하는 코드는 항상 이 순서를 거쳐서 mybranch에서만 작업합니다.**  
1. mybranch를 main에 합치기


