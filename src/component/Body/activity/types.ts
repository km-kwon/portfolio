// Activity 데이터 타입 정의
export interface Activity {
    id: string;
    title: string;
    subTitle: string;
    mainContent: string[];
    tags: string[];
    period: string[];
    type: 'trouble-shooting' | 'learning' | 'achievement' | 'side-project' | "activity";
    link?: { label: string; href: string };
    banner?: string;
}
