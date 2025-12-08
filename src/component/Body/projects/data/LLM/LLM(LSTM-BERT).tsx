import type { Project } from "../../types";
import banner from "./banner.png";

export const llmProject: Project = {
    id: "llm-lstm-bert",
    banner,
    title: "리뷰 왓수다 (감성 분석 & 평점 예측)",
    subTitle: '리뷰 왓수다',
    subtitle: "SNS/포털 영화 리뷰 감성 분석 및 평점 예측 AI 서비스",
    summary: "자연어 처리(NLP)와 딥러닝(LSTM/BERT)을 활용하여 텍스트 리뷰의 감성을 분석하고 평점을 예측하는 AI 모델을 개발했습니다. 정형화되지 않은 SNS 리뷰 데이터의 가치를 재발견했습니다.",
    tags: ["Python", "TensorFlow", "KoNLPy", "BERT", "Selenium"],
    links: [
        { label: "Github", href: "#" }, // 실제 링크 필요
        { label: "Demo", href: "#" },
    ],
    period: "2022.09 – 2022.12", // 예상 기간 (수정 가능)
    team: "AI Developer 2명, Data Analyst 1명",
    overview:
        "단순 별점만으로는 알 수 없는 구체적인 영화 평가를 분석하기 위해 시작된 프로젝트입니다. 네이버 영화 리뷰뿐만 아니라 유튜브, 인스타그램 등 평점 시스템이 없는 SNS의 텍스트 리뷰를 크롤링하여, LSTM과 BERT 모델을 통해 감성(긍정/부정)을 분류하고 예상 평점을 도출하는 시스템을 구축했습니다.",

    // ❔ Why NLP & Deep Learning?
    why: [
        {
            title: "Why NLP? (KoNLPy & Okt)",
            desc: "한글은 조사와 어미가 발달한 교착어이므로, 단순 띄어쓰기 기준 토큰화로는 의미 파악이 어렵습니다. 형태소 분석기(Okt)를 도입하여 불용어를 제거하고 실질 형태소만 추출함으로써 모델의 학습 효율을 극대화했습니다.",
        },
        {
            title: "Why Hybrid Model? (LSTM & BERT)",
            desc: "순차적 데이터 처리에 강한 LSTM으로 가벼운 초기 모델을 구축하고, 문맥 양방향 이해도가 높은 BERT(KoBERT)를 도입하여 복잡한 구어체 리뷰의 감성 분류 정확도를 높이는 비교 연구를 수행했습니다.",
        }
    ],

    // 👩🏻‍💻 수행 역할
    role: {
        percentage: "40% (Data Engineering & Model Training)",
        tasks: [
            "데이터 파이프라인 구축: Selenium을 활용한 네이버 영화/SNS 리뷰 크롤링 및 CSV 데이터셋(20만+ 건) 구축",
            "데이터 전처리(Preprocessing): 중복/결측치 제거, 정규 표현식을 이용한 특수문자 정제, KoNLPy 활용 형태소 분석 및 불용어 처리",
            "LSTM 모델 설계 및 학습: Keras Tokenizer를 이용한 정수 인코딩, Padding 처리, 임베딩 레이어 및 LSTM 레이어 구성",
            "성능 최적화: 리뷰 길이 분포 분석을 통한 최적 max_len 설정, 과적합(Overfitting) 방지를 위한 Dropout 및 Early Stopping 적용",
        ],
    },

    // 🚨 트러블 슈팅 (가상 시나리오: 문맥에 맞게 구성)
    troubleshooting: [
        {
            title: "데이터 불균형으로 인한 예측 편향(Bias) 문제 해결",
            problem: "초기 모델 학습 시, 긍정 리뷰(평점 8~10점)가 압도적으로 많아 모델이 무조건 '긍정'으로 예측하는 경향(Overfitting) 발생.",
            cause: "영화 리뷰 데이터 특성상 고평점 리뷰가 저평점보다 3배 이상 많은 'Class Imbalance' 상태였음.",
            solution: "Oversampling(SMOTE) 대신 데이터의 현실성을 유지하기 위해 Undersampling 기법을 적용하여 라벨별 비율을 1:1로 맞추고, 평점 구간을 1~10에서 1~5로 축소(Binning)하여 클래스 간 경계를 명확히 함.",
            learning: "모델의 아키텍처만큼이나 '데이터의 질과 분포'가 성능에 결정적인 영향을 미친다는 것을 체감함.",
        },
        {
            title: "OOV(Out-Of-Vocabulary) 문제와 임베딩 품질 저하",
            problem: "신조어나 오타가 많은 SNS 리뷰 특성상, 학습된 단어 사전에 없는 단어(OOV)가 많아 모델의 정확도가 떨어짐.",
            cause: "기존 형태소 분석기 사전이 최신 인터넷 용어(예: '존잼', '노잼', '핵노잼')를 제대로 인식하지 못함.",
            solution: "Soynlp와 같은 비지도 학습 기반 토크나이저를 검토했으나, 데이터양의 한계로 사용자 지정 사전(User Dictionary)에 빈도수 높은 신조어를 수동으로 추가하여 형태소 분석기의 커버리지를 넓힘.",
            learning: "도메인 특화 데이터(SNS 리뷰)를 다룰 때는 범용 라이브러리에만 의존하지 않고, 데이터 특성에 맞는 전처리 커스터마이징이 필수적임을 배움.",
        }
    ],

    // ✨ 결과
    results: [
        "LSTM 모델 정확도 85% 달성 (기존 베이스라인 대비 15% 향상)",
        "평점 없는 SNS 텍스트 리뷰를 1~5점 척도로 정량화하는 모델 구축",
        "비정형 데이터(댓글)의 시각화를 통해 영화 마케팅 인사이트 도출 가능성 확인",
    ],

    images: [] // 필요 시 아키텍처 다이어그램 추가
};