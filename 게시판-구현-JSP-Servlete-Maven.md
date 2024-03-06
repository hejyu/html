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

## git 브랜치 생성
