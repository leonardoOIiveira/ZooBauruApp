export interface Animal {
    id?: number;
    url_foto?: string;
    secao_zoo: string;
    nome_popular: string;
    nome_cientifico: string;
    incubacao: {
        gestacao: string;
    };
    longevidade: string;
    dist_geografica: string;
    habito_alimentar: string;
    curiosidade: string;
    risco_extincao: string;
}
