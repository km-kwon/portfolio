import type { Project } from "../../types";
import banner from "./banner.png";

export const llmProject: Project = {
  id: "llm-lstm-bert",
  banner,
  title: "리뷰 왓수다 (감성 분석 & 평점 예측)",
  subTitle: "리뷰 왓수다",
  subtitle: "SNS/포털 영화 리뷰 감성 분석 및 평점 예측 AI 서비스",
  summary:
    "SNS와 포털 영화 리뷰를 수집해 감성 분류와 평점 예측 모델을 구축했습니다. LSTM 기반 베이스라인과 BERT 모델을 비교하며 한국어 리뷰 데이터의 전처리, 불균형, OOV 문제를 다뤘습니다.",
  tags: ["Python", "TensorFlow", "KoNLPy", "BERT", "Selenium"],
  links: [
    // { label: "Github", href: "#" }, // 실제 링크 필요
    // { label: "Demo", href: "#" },
  ],
  period: "2022.09 – 2022.12", // 예상 기간 (수정 가능)
  team: "AI Developer 2명, Data Analyst 1명",
  overview:
    "별점만으로는 파악하기 어려운 영화 리뷰의 맥락을 분석하기 위해 시작한 프로젝트입니다. 네이버 영화 리뷰와 유튜브·인스타그램 텍스트 리뷰를 수집하고, LSTM과 BERT 모델로 감성 분류 및 예상 평점 도출 흐름을 구축했습니다.",

  // ❔ Why NLP & Deep Learning?
  why: [
    {
      title: "Why NLP? (KoNLPy & Okt)",
      desc: "한국어 리뷰는 조사와 어미, 신조어가 많아 단순 띄어쓰기 토큰화만으로는 의미가 잘 보존되지 않았습니다. Okt 기반 형태소 분석과 불용어 처리를 적용해 모델 입력 품질을 높였습니다.",
    },
    {
      title: "Why Hybrid Model? (LSTM & BERT)",
      desc: "LSTM으로 가벼운 베이스라인을 먼저 만들고, 문맥 양방향 이해에 강한 BERT 계열 모델을 비교했습니다. 모델 구조보다 데이터 품질과 분포가 성능에 미치는 영향을 함께 확인했습니다.",
    },
  ],

  // 👩🏻‍💻 수행 역할
  role: {
    percentage: "40% (Data Engineering & Model Training)",
    tasks: [
      "Selenium 기반 네이버 영화/SNS 리뷰 크롤링 및 CSV 데이터셋(200,000+) 구축",
      "중복·결측치 제거, 정규식 기반 특수문자 정제, KoNLPy 형태소 분석 및 불용어 처리",
      "Keras Tokenizer, Padding, Embedding, LSTM 레이어를 활용한 베이스라인 모델 설계 및 학습",
      "리뷰 길이 분포 기반 max_len 설정, Dropout·Early Stopping 적용으로 과적합 완화",
    ],
  },

  // 🚨 트러블 슈팅 (가상 시나리오: 문맥에 맞게 구성)
  troubleshooting: [
    {
      title: "데이터 불균형으로 인한 예측 편향(Bias) 문제 해결",
      problem:
        "초기 모델 학습에서 긍정 리뷰(평점 8~10점)가 많아 모델이 긍정 클래스로 치우쳐 예측하는 경향이 있었습니다.",
      cause:
        "영화 리뷰 데이터 특성상 고평점 리뷰가 저평점보다 3배 이상 많은 Class Imbalance 상태였습니다.",
      solution:
        "데이터의 현실성을 유지하기 위해 Undersampling으로 라벨 비율을 맞추고, 평점 구간을 1~10에서 1~5로 재구성해 클래스 경계를 단순화했습니다.",
      learning:
        "모델 구조만큼 데이터 분포와 라벨 설계가 성능에 큰 영향을 준다는 점을 확인했습니다.",
    },
    {
      title: "OOV(Out-Of-Vocabulary) 문제와 임베딩 품질 저하",
      problem:
        "신조어나 오타가 많은 SNS 리뷰 특성상 학습 사전에 없는 단어(OOV)가 많아 모델 정확도가 떨어졌습니다.",
      cause:
        "기존 형태소 분석기 사전이 최신 인터넷 용어(예: '존잼', '노잼', '핵노잼')를 안정적으로 인식하지 못했습니다.",
      solution:
        "비지도 학습 기반 토크나이저를 검토한 뒤, 프로젝트 범위에서는 사용자 지정 사전에 빈도수 높은 신조어를 추가해 형태소 분석 커버리지를 넓혔습니다.",
      learning:
        "도메인 특화 데이터는 범용 전처리만으로 충분하지 않으며, 실제 데이터의 언어 습관에 맞춘 사전과 정제 규칙이 필요하다는 점을 배웠습니다.",
    },
  ],

  // ✨ 결과
  results: [
    "LSTM 모델 정확도 85% 달성 (기존 베이스라인 대비 15% 향상)",
    "평점 없는 SNS 텍스트 리뷰를 1~5점 척도로 정량화하는 모델 구축",
    "비정형 댓글 데이터를 정량화해 리뷰 흐름을 비교·시각화할 수 있는 가능성 확인",
  ],

  images: [], // 필요 시 아키텍처 다이어그램 추가

  highlights: [
    { value: "85%", label: "모델 정확도" },
    { value: "200K+", label: "학습 데이터" },
    { value: "15%", label: "성능 향상" },
  ],

  techDecisions: [
    { tech: "Python", reason: "TensorFlow, KoNLPy, 데이터 전처리 라이브러리를 활용한 모델링에 적합" },
    { tech: "BERT", reason: "구어체 리뷰의 앞뒤 문맥을 함께 반영해 감성 분류 품질을 높이기 위해 선택" },
    { tech: "Selenium", reason: "네이버·유튜브·인스타그램 등 동적 페이지의 리뷰 데이터를 수집" },
  ],
};
