export interface Orders {
    id: number;
    serviceType: string;
    tva: number;
    clientId: number;
    nbDays: number;
    totalExcludeTax: number;
    state: number;
    comment: string;
}