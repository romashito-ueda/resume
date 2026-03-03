import React, { useMemo, useState } from "react";
import { Printer } from "lucide-react";

type Project = {
  start: string;
  end: string;
  summary: string;
  phase?: string;
  main_language?: string;
  os?: string;
  tools_raw?: string;
  contract?: string;
  industry?: string;
  team_size?: string;
  position?: string;
  details?: string;
};

const DATA = {
  profile: {
    name: "UT",
    nearest: "京浜東北線大井町",
    qualifications: `2024年：基本情報技術者
2024年：TOEIC700点
2024年：Associate Cloud Engineer Certification
2024年：簿記3級`,
    self_pr: `東北大学工学部卒。TypeScript/Reactを軸に、プロダクトの新規開発・改善を主戦場とするフロントエンドエンジニアです。
Databricks/Teradata × Python/SQL によるDWH・パイプライン設計、分析支援も経験しています。

【リード経験】
フロントエンドリードとして、コードレビュー／タスク設計／進捗管理／画面仕様書作成を担当。
テスト期間のスケジュール設計・推進など、品質担保のリード業務も行いました。

【生成AI利活用】
業務適用を前提にPoC/モック作成や活用検証を実施。あわせてデータ漏洩リスクの観点で利用可否・運用ルールを整理し、調査結果を踏まえて Gemini / Copilot の導入が決定しました。

【強み】
負荷増大局面でのAPI呼び込み・データ表示方式の見直し、パフォーマンス改善。
自動化・テスト導入など、技術的負債の返済と開発効率の向上。
資料作成（PowerPoint/Excel）と関係者調整を含む、ビジネス側とのコミュニケーション。`,
  },
  skills: [
    "TypeScript","React","Python","SQL","Go","GitHub","Redmine","AWS","Slack","Kibela","Backlog","Storybook",
    "Databricks","Teradata","Azure","Teams","社内Wiki","PowerPoint","Excel","Word","多言語対応","antd","生成AI利活用",
    "パイプラインでの自動生成","データ基盤構築","データ整形","マスク化","データのセキュリティガバナンス","大規模開発手法",
    "API繋ぎこみ","useQuery","状態管理",
  ],
  projects: [
    {
      start: "2025-02-01",
      end: "現在",
      summary: `保育園、幼稚園向けWebアプリケーション開発
生成AIなど最新技術の利活用調査作業`,
      phase: "基本設計～開発、テスト",
      main_language: "Typescript React",
      os: "Mac",
      tools_raw: `・バージョン管理：Github,Redmine
・インフラ：AWS
・コミュニケーション：Slack
・ドキュメント：Kibera
・BTS：Backlog
Storybook`,
      contract: "委託",
      industry: "教育",
      team_size: "5 ~ 10",
      position: "フロントエンドリード、開発者",
      details: `【プロジェクトの詳細】
保育園や、幼稚園などの教育施設向けWebアプリケーションの新規開発や改善業務

【作業内容の詳細】
メインではTypescript Reactによるフロントエンド開発、を担当。

ユーザー数が増えるにつれ、負荷が高まってきた時には
API呼び込み方法・データ表示方法の改善なども担当。

また、エンジニアリードとしてチームをまとめ、
コードレビューや進捗管理、タスク設計、画面仕様書の作成にも着手。

週に１回技術共有会があり、バージョン対応やAI利活用などの最新技術への調査、モック作成を実施。
【開発手法】
アジャイル開発

【作業の担当割合】
7割：フロントエンド開発
2割：リーダー業務
1割：AIプロダクトやアップデートなど最新技術共有

【習得技術】
多言語対応、antd、生成AI利活用、パイプラインでの自動生成`,
    },
    {
      start: "2024-05-01",
      end: "2025-06-01",
      summary: "データ基盤開発, AI.データ利活用推進",
      phase: "要件定義〜運用保守",
      main_language: "Python, SQL",
      os: "Windows, Linux",
      tools_raw: `・プラットフォーム：Databricks, TeraData
・バージョン管理：Github
・インフラ：Azure
・コミュニケーション：Teams
・ドキュメント：社内Wiki, Powerpoint, Excel
・BTS：Backlog`,
      contract: "正社員",
      industry: "金融",
      team_size: "10",
      position: "アナリスト",
      details: `【プロジェクトの詳細】
大手クレジットカード会社にてAI, データ活用推進のため業務改善提案とデータ基盤の構築

【作業内容の詳細】
既存大規模データのDatabricks（Azure）への移行作業
DatabricksやTeraDataにてPytohn, SQL用いたDWH, パイプラインの設計
個人情報の多い業界であるため、マスク化や権限など個人情報データの取り扱い設計

セキュリティガバナンスのためのデータ確認作業の業務提案
権限付与や、データ追加のための業務提案

【開発手法】プロジェクト毎にウォーターフォールとアジャイル

【作業の担当割合】
開発作業：7
業務改善提案：3

【習得技術】
データ基盤構築、データ整形、マスク化、データのセキュリティガバナンス`,
    },
    {
      start: "2023-09-01",
      end: "2024/4/31",
      summary: "金融機関社内統合業務アプリケーションの開発",
      phase: "開発ーテスト",
      main_language: "Typescript React",
      os: "Windows, Linux",
      tools_raw: `・バージョン管理：Github
・インフラ：AWS
・コミュニケーション：Teams
・ドキュメント：Word, Powerpoint, Excel
・BTS：Backlog
storybook`,
      contract: "正社員",
      industry: "金融",
      team_size: "100",
      position: "アナリスト",
      details: `【プロジェクトの詳細】
金融機関内に複数存在する業務アプリケーションの統合ポータルの作成

【作業内容の詳細】
Storybookを用いたコンポーネントの開発作業
ページ作成、API繋ぎこみ作業
テストの実施、テスト期間におけるスケジュールなどのリード業務

MTGの議事録作成

【開発手法】ウォーターフォール

【作業の担当割合】
開発：5
テスト：4
資料作成：１

【習得技術】
Storybook、大規模開発手法、API繋ぎこみ、useQuery`,
    },
    {
      start: "2021-04-01",
      end: "2022-03-31",
      summary: "モバイルオーダープラットフォームの保守・運用作業",
      phase: "保守・運用",
      main_language: "Typescript React Go",
      os: "Mac",
      tools_raw: `・バージョン管理：Github
・インフラ：AWS
・コミュニケーション：Slack
・BTS：Backlog`,
      contract: "委託",
      industry: "IT",
      team_size: "10",
      position: "メンバー",
      details: `【プロジェクトの詳細】
モバイルオーダープラットフォームの保守運用作業

【作業内容の詳細】
チケットの切られたバグについて調査し、改修

【開発手法】アジャイルなど

【作業の担当割合】
開発・保守：１０

【習得技術】
React開発, 状態管理`,
    },
  ] as Project[],
};

function uniq(list: string[]) {
  const s = new Set<string>();
  const out: string[] = [];
  for (const x of list) {
    const t = (x || "").trim();
    if (!t) continue;
    if (!s.has(t)) {
      s.add(t);
      out.push(t);
    }
  }
  return out;
}

function normalizeToken(raw: string): string {
  let t = String(raw ?? "").trim();
  if (!t) return "";

  t = t.replace(/^[\s•・\-–—]+/, "").trim();

  const idx = t.includes("：") ? t.indexOf("：") : t.indexOf(":");
  if (idx >= 0 && idx <= 20) t = t.slice(idx + 1).trim();

  while (["、", ",", "，", "。", "."].some((x) => t.endsWith(x))) t = t.slice(0, -1).trim();

  if (!t) return "";
  if (t === "多言語対応") return "i18n";

  const k = t.toLowerCase();
  if (["typescript", "typescripts", "type script", "typesctipt", "typescrpit"].includes(k)) return "TypeScript";
  if (k === "react") return "React";
  if (k === "github" || k === "git hub") return "GitHub";
  if (k === "kibera" || k === "kibela") return "Kibela";
  if (k === "storybook" || k === "story book") return "Storybook";
  if (k === "aws") return "AWS";
  if (k === "azure") return "Azure";
  if (k === "databricks") return "Databricks";
  if (k === "teradata" || k === "tera data") return "Teradata";
  if (k === "powerpoint" || k === "power point") return "PowerPoint";

  return t;
}

function tokenize(v: unknown): string[] {
  const base = String(v ?? "").replace(/、/g, ",").replace(/\r\n/g, "\n").trim();
  if (!base) return [];
  const parts = base
    .split(/[,/\n]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .flatMap((s) => s.split(/\s+/).map((x) => x.trim()))
    .filter(Boolean);
  return parts.map(normalizeToken).filter(Boolean);
}

function tokensFromProject(p: Project): string[] {
  const learned = (() => {
    const m = String(p.details || "").match(/【習得技術】\s*\n([\s\S]*)$/);
    if (!m) return [] as string[];
    return tokenize(m[1]);
  })();
  return uniq([...tokenize(p.main_language), ...tokenize(p.tools_raw), ...learned]);
}

type TokenGroupKey = "Languages" | "Frameworks" | "Platform" | "Tools" | "Topics" | "Other";

function groupTokens(tokens: string[]) {
  const groups: Record<TokenGroupKey, string[]> = {
    Languages: [],
    Frameworks: [],
    Platform: [],
    Tools: [],
    Topics: [],
    Other: [],
  };

  const add = (k: TokenGroupKey, t: string) => {
    if (!groups[k].includes(t)) groups[k].push(t);
  };

  for (const t of tokens) {
    if (["TypeScript", "JavaScript", "Python", "SQL", "Go"].includes(t)) {
      add("Languages", t);
      continue;
    }
    if (["React", "antd", "Storybook", "useQuery", "状態管理"].includes(t)) {
      add("Frameworks", t);
      continue;
    }
    if (["AWS", "Azure", "Databricks", "Teradata"].includes(t)) {
      add("Platform", t);
      continue;
    }
    if (["GitHub", "Redmine", "Backlog", "Slack", "Teams", "Kibela", "社内Wiki", "PowerPoint", "Excel", "Word"].includes(t)) {
      add("Tools", t);
      continue;
    }
    if (["i18n", "生成AI利活用", "パイプラインでの自動生成", "データ基盤構築", "データ整形", "マスク化", "データのセキュリティガバナンス", "大規模開発手法", "API繋ぎこみ"].includes(t)) {
      add("Topics", t);
      continue;
    }
    add("Other", t);
  }

  const order: TokenGroupKey[] = ["Languages", "Frameworks", "Platform", "Tools", "Topics", "Other"];
  return order.map((k) => ({ key: k, items: groups[k] })).filter((g) => g.items.length > 0);
}

function TagButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      className={[
        "rounded-full border px-3 py-1 text-sm transition",
        "max-w-full whitespace-normal break-words",
        active ? "bg-zinc-900 text-white" : "bg-white hover:bg-zinc-50",
      ].join(" ")}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function CardBox({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border bg-white p-4 shadow-sm">{children}</div>;
}

export default function App() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skills = useMemo(() => uniq(DATA.skills.map(normalizeToken).filter(Boolean)), []);
  const projects = useMemo(() => DATA.projects, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const tags = tokensFromProject(p);
      if (activeSkill && !tags.includes(activeSkill)) return false;
      return true;
    });
  }, [projects, activeSkill]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-20 border-b bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <div className="text-sm font-semibold tracking-tight">{DATA.profile.name}</div>
            <div className="text-xs text-zinc-500">{DATA.profile.nearest}</div>
            {activeSkill ? (
              <button
                type="button"
                className="ml-2 rounded-full bg-zinc-900 px-2 py-0.5 text-xs text-white"
                onClick={() => setActiveSkill(null)}
                title="Filter解除"
              >
                Filter: {activeSkill} ×
              </button>
            ) : null}
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm hover:bg-zinc-50"
            onClick={() => window.print()}
            title="印刷(PDF保存)"
          >
            <Printer className="h-4 w-4" />
            Print
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="order-2 grid gap-4 lg:order-1">
            <CardBox>
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold">Skills</div>
                <div className="text-xs text-zinc-500">クリックで案件を絞り込み</div>
              </div>

              <div className="mt-3 max-h-[280px] overflow-auto pr-1 sm:max-h-[360px]">
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <TagButton
                      key={s}
                      label={s}
                      active={activeSkill === s}
                      onClick={() => setActiveSkill((cur) => (cur === s ? null : s))}
                    />
                  ))}
                </div>
              </div>
            </CardBox>

            <CardBox>
              <div className="text-sm font-semibold">資格・スコア</div>
              <div className="mt-3 space-y-1 text-sm text-zinc-700">
                {String(DATA.profile.qualifications || "—")
                  .split("\n")
                  .filter(Boolean)
                  .map((line, idx) => {
                    const shown = String(line).replace(/^[0-9]{4}年[:：]/, "").trim();
                    return (
                      <div key={idx} className="break-words">
                        {shown}
                      </div>
                    );
                  })}
              </div>
            </CardBox>
          </div>

          <div className="order-1 grid gap-4 lg:order-2">
            <CardBox>
              <div className="text-sm font-semibold">自己PR</div>

              <div className="mt-3 hidden space-y-2 text-sm text-zinc-700 lg:block">
                {String(DATA.profile.self_pr || "—")
                  .split("\n")
                  .filter(Boolean)
                  .map((line, idx) => (
                    <p key={idx} className="m-0 break-words">
                      {line}
                    </p>
                  ))}
              </div>

              <div className="mt-3 space-y-3 lg:hidden">
                <div className="rounded-xl border bg-zinc-50 p-3">
                  <div className="text-xs font-semibold text-zinc-500">要約</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                    <li>TypeScript/React中心のフロントエンド開発（新規/改善）</li>
                    <li>データ基盤（Databricks/Teradata × Python/SQL）</li>
                    <li>生成AI：PoC/モック＋データ漏洩観点の整理 → Gemini/Copilot導入判断</li>
                    <li>リード：レビュー／タスク設計／進捗／品質推進</li>
                  </ul>
                </div>

                <details className="rounded-xl border p-3">
                  <summary className="cursor-pointer text-sm font-medium">全文を見る</summary>
                  <div className="mt-2 space-y-2 text-sm text-zinc-700">
                    {String(DATA.profile.self_pr || "—")
                      .split("\n")
                      .filter(Boolean)
                      .map((line, idx) => (
                        <p key={idx} className="m-0 break-words">
                          {line}
                        </p>
                      ))}
                  </div>
                </details>
              </div>
            </CardBox>
          </div>
        </section>

        <div className="my-6 h-px bg-zinc-200" />

        <section className="space-y-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-lg font-semibold tracking-tight">Projects</h2>
            <div className="text-xs text-zinc-500">
              表示: {filtered.length} / {projects.length}
            </div>
          </div>

          <div className="grid gap-3">
            {filtered.map((p, idx) => {
              const tags = tokensFromProject(p);
              const groups = groupTokens(tags);
              return (
                <div key={idx} className="rounded-2xl border bg-white p-4 shadow-sm">
                  <div className="text-xs text-zinc-500">
                    {p.start} — {p.end}
                  </div>
                  <div className="mt-1 whitespace-pre-line break-words text-base font-semibold leading-snug">
                    {p.summary}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-500">
                    {p.position ? <span>役割: {p.position}</span> : null}
                    {p.phase ? <span>工程: {p.phase}</span> : null}
                    {p.team_size ? <span>規模: {p.team_size}</span> : null}
                    {p.industry ? <span>業界: {p.industry}</span> : null}
                  </div>

                  <div className="mt-3 space-y-2">
                    {groups.map((g) => (
                      <div key={g.key} className="space-y-1">
                        <div className="text-[11px] font-semibold tracking-wide text-zinc-500">
                          {g.key}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {g.items.map((t) => (
                            <TagButton
                              key={t}
                              label={t}
                              active={activeSkill === t}
                              onClick={() => setActiveSkill((cur) => (cur === t ? null : t))}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <details className="mt-3 rounded-xl border bg-zinc-50 p-3">
                    <summary className="cursor-pointer text-sm font-medium">詳細</summary>
                    <div className="mt-2 whitespace-pre-wrap break-words text-sm text-zinc-700">
                      {p.details || "—"}
                    </div>
                  </details>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

