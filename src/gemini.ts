import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";

type GenerativePart = {
    inlineData: {
        data: string; // Base64データ
        mimeType: string;
    };
};

export async function Gemini(file: File, prompt:string): Promise<void> {
    // Google Generative AI インスタンスの初期化
    const apiKey = process.env.VITE_API_KEY!; // 環境変数の読み込み
    const genAI = new GoogleGenerativeAI(apiKey);
    const model: GenerativeModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const mimeType = file.type; 
    // ファイルをGenerative AI用のパーツに変換する関数
    async function fileToGenerativePart(file: File): Promise<GenerativePart> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result && typeof reader.result === "string") {
                    const base64Data = reader.result.split(",")[1]; // Base64データ部分のみ取得
                    resolve({
                        inlineData: {
                            data: base64Data,
                            mimeType,
                        },
                    });
                } else {
                    reject(new Error("Failed to read file as Base64."));
                }
            };
            reader.onerror = () => {
                reject(reader.error || new Error("An unknown error occurred while reading the file."));
            };
            reader.readAsDataURL(file); // Base64形式に変換
        });
    }

    try {
        const imagePart = await fileToGenerativePart(file);
        const result = await model.generateContent([prompt, imagePart]);
        console.log(await result.response.text());
    } catch (err) {
        console.error("Error generating content:", err);
    }
}
