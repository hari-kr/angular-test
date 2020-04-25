export class GWData {
    averageScore : number;
    mostSelected : string;
    mostTransferredIn: string;
    highestScorer: string
    mostCaptained: string;
}

export class FplResponse {
    events: Array<any>;
    game_settings: any;
    phases: Array<any>;
    teams: Array<any>;
    total_players: number;
    elements: Array<any>;
    element_stats: Array<any>;
    element_types: Array<any>;
}