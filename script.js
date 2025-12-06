// 1. AI 지식 기반 (Knowledge Base) : 사용자님의 6개 최종 데이터
const filmingLocations = {
    // 1. 한국외대 본관
    "pin-hufs-main": {
        "location": "한국외대 본관",
        "movie": "모범 택시 2 <드라마>",
        "description": "14화에서 일망타진 당한 블랙썬 일당 법원 판결을 김용민 기자가 보도하는 법원의 배경으로 한국외국어 대학교 본관이 나왔다.",
        "photo_url": "hufs_mobeam.png",
        "video_link": "https://www.youtube.com/watch?v=Qa_jshZMoC0"
    },
    // 2. 경희대 중앙도서관
    "pin-khu-library": {
        "location": "경희대 중앙도서관",
        "movie": "클래식 <영화>",
        "description": "영화 클래식에서 비가 오는 날 조인성이 자신의 옷으로 손예진의 비를 막아주며 뛰어 들가는 곳의 배경이 중앙도서관의 입구이다. 이 장면은 풋풋한 젊은 이들의 청춘을 보여주며 '너에게 난 나에게 넌'의 배경음악이 깔리기도 한다.",
        "photo_url": "khu_classic.png",
        "video_link": "https://www.youtube.com/watch?v=XacwRRqQGJM"
    },
    // 3. 경희대 문과대학
    "pin-khu-liberal": {
        "location": "경희대 문과대학",
        "movie": "건축학개론<영화>",
        "description": "영화 건축학개론에서 주인공인 수지와 이제훈이 건축학개론 수업을 듣는 공과대학 건물이 경희대학교의 문과대학을 배경으로 한다.",
        "photo_url": "khu_kunchuk.png",
        "video_link": "https://www.youtube.com/watch?v=A756ZWw-40g"
    },
    // 4. 서울시립대 인문학관
    "pin-uos-human": {
        "location": "서울시립대 인문학관",
        "movie": "선재업고튀어<드라마>",
        "description": "드라마 선재업고튀어에서 주인공 선재(변우석)와 임솔(김혜윤)이 손을 잡고 걷는 캠퍼스가 시립대의 인문학관을 배경으로 한다.",
        "photo_url": "uos_sunjae.png",
        "video_link": "" // 영상 URL 없음
    },
    // 5. 서울시립대 창공관
    "pin-uos-chang": {
        "location": "서울시립대 창공관",
        "movie": "더 글로리 <넷플릭스 드라마>",
        "description": "더 글로리에서 문동은(송혜교)이 다니던 대학교의 배경이 서울시립대의 창공관을 배경으로 한 것으로 학생들 사이에서 크게 패러디 되고있다.",
        "photo_url": "uos_the glory.png",
        "video_link": "" // 영상 URL 없음
    },
    // 6. 서울시립대 음악관
    "pin-uos-music": {
        "location": "서울시립대 음악관",
        "movie": "펜트하우스 <드라마>",
        "description": "드라마 펜트하우스에서 서울 음대 실기고사 장면이 나오는데, 주인공이 자녀를 기다리는 한 장면의 배경이 서울시립대 음악관을 배경으로 한다.",
        "photo_url": "uos_penthouse.png",
        "video_link": "" // 영상 URL 없음
    }
};

// 2. 핀 클릭 시 AI 검색 기능 시뮬레이션
document.querySelectorAll('.pin').forEach(pin => {
    pin.addEventListener('click', function() {
        const pinId = this.id; 
        
        // **AI 검색 (Retrieval) 시뮬레이션:** ID를 키로 사용해 JSON DB에서 데이터 가져오기
        const data = filmingLocations[pinId];

        if (data) {
            // 팝업 요소에 검색된 데이터 채우기 (시각화)
            document.getElementById('popup-location').textContent = data.location;
            document.getElementById('popup-movie').textContent = data.movie;
            document.getElementById('popup-desc').textContent = data.description;
            document.getElementById('popup-photo').src = data.photo_url;
            
            // **영상 URL 처리:** URL이 없는 경우 '영상 자료 없음'으로 표시
            const videoLinkElement = document.getElementById('popup-video');
            if (data.video_link && data.video_link !== "") {
                videoLinkElement.href = data.video_link;
                videoLinkElement.textContent = "🎬 영상 보러가기";
                videoLinkElement.style.display = 'block';
            } else {
                videoLinkElement.href = "#"; 
                videoLinkElement.textContent = "🚨 영상 자료 없음";
                videoLinkElement.style.display = 'block';
            }
            
            // 팝업 보이기
            document.getElementById('popup').style.display = 'block';
        } else {
            alert("죄송합니다. 해당 장소의 촬영 정보가 AI 지식 기반에 없습니다.");
        }
    });
});