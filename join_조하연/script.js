// 작성자 : 조하연

document.getElementById('join').addEventListener('click', function() {
    if(fn_form_valid()) {
        document.forms[0].submit()
    }
})



let fn_form_valid = function() {
    let m_mem_id = member_id.value.trim()
    let m_mem_passwrd = member_password.value.trim()
    let m_mem_name = member_name.value.trim()
    let m_birth_day = birth_day.value.trim()
    let m_mem_contact = member_contact.value.trim()
    let m_mem_gender = document.querySelector('input[name="member_gender"]:checked')
    
    if(m_mem_id == "") {
        alert("아이디를 입력해주세요")
        member_id.focus()
        return false       
    } 

    if( m_mem_passwrd.length < 6) {
        alert("비밀번호는 6글자 이상 입력해주세요")
        return false         
    } 

    if( m_mem_name == "") {
        alert("이름을 입력해주세요")
        
        return false    
    } 
    
    let regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/;
    if(!regex.test(m_mem_name)) {
        alert("이름은 한글과 영문만 입력할 수 있습니다")
        return false
    }

    if(m_birth_day == "") {
        alert("생년월일을 입력해주세요")
        return false     
    }

    regix = /(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/
    if(!regix.test(m_birth_day)) {
        alert("생년월일은 yyyy-mm-dd 형식으로 입력해주세요")
        console.log(m_birth_day)
        return false
    }


    if(m_mem_gender == "" || m_mem_gender == 'undefined') {
        alert("성별을 입력해주세요")
        return false     
    } 

    if(m_mem_contact == "") {
        alert("전화번호를 입력해주세요")
        return false   
    } 

    return true

}
