import type { Project } from "../../types";
import banner from "./banner.png";

export const llmProject: Project = {
  id: "llm-lstm-bert",
  banner,
  title: "20만 리뷰 데이터 감성 분석 파이프라인",
  subTitle: "20만 리뷰 감성 분석",
  subtitle: "한국어 리뷰 전처리와 LSTM/BERT 비교로 평점 예측",
  summary:
    "별점만으로는 읽기 어려운 리뷰 맥락을 정량화하기 위해 20만 건 이상의 영화 리뷰를 수집·정제했습니다. LSTM 베이스라인과 BERT를 비교하며 한국어 전처리, 데이터 불균형, OOV 문제를 해결했습니다.",
  tags: ["Python", "TensorFlow", "KoNLPy", "BERT", "Selenium"],
  links: [
    // { label: "Github", href: "#" }, // 실제 링크 필요
    // { label: "Demo", href: "#" },
  ],
  period: "2022.09 – 2022.12", // 예상 기간 (수정 가능)
  team: "AI Developer 2명, Data Analyst 1명",
  overview:
    "사용자는 별점만으로 리뷰의 구체적인 감정과 이유를 파악하기 어렵습니다. 네이버 영화 리뷰와 유튜브·인스타그램 텍스트를 수집하고, 전처리부터 학습, 감성 분류, 예상 평점 도출까지 이어지는 데이터 파이프라인을 구축했습니다.",

  // ❔ Why NLP & Deep Learning?
  why: [
    {
      title: "Why KoNLPy & Okt?",
      desc: "한국어 리뷰는 조사, 어미, 신조어가 많아 단순 띄어쓰기 토큰화로는 의미가 잘 보존되지 않았습니다. Okt 기반 형태소 분석과 불용어 처리로 모델 입력 품질을 높였습니다.",
    },
    {
      title: "Why LSTM + BERT 비교?",
      desc: "가벼운 LSTM 베이스라인을 먼저 만든 뒤, 문맥 이해에 강한 BERT 계열 모델을 비교했습니다. 모델 구조뿐 아니라 데이터 품질과 라벨 분포가 성능에 미치는 영향을 함께 확인했습니다.",
    },
  ],

  // 👩🏻‍💻 수행 역할
  role: {
    percentage: "40% (Data Engineering & Model Training)",
    tasks: [
      "Selenium 기반 네이버 영화/SNS 리뷰 크롤링 및 200,000+ CSV 데이터셋 구축",
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
    "평점 없는 SNS 텍스트 리뷰를 1~5점 척도로 정량화하는 흐름 구축",
    "비정형 댓글을 정제된 데이터셋으로 바꿔 리뷰 흐름을 비교·시각화할 기반 확보",
  ],

  images: [], // 필요 시 아키텍처 다이어그램 추가

  highlights: [
    { value: "85%", label: "모델 정확도" },
    { value: "200K+", label: "학습 데이터" },
    { value: "15%", label: "성능 향상" },
  ],

  techDecisions: [
    { tech: "Python", reason: "수집, 전처리, 학습을 하나의 데이터 파이프라인으로 연결하기 위해 선택" },
    { tech: "BERT", reason: "구어체 리뷰의 앞뒤 문맥을 함께 반영해 감성 분류 품질을 높이기 위해 적용" },
    { tech: "Selenium", reason: "네이버, 유튜브, 인스타그램 등 동적 페이지의 리뷰 데이터를 수집" },
  ],
};
