interface IStats {
    soloStats: IGameModeStats;
    duoStats: IGameModeStats;
    squadStats: IGameModeStats;
    soloFppStats: IGameModeStats;
    duoFppStats: IGameModeStats;
    squadFppStats: IGameModeStats;
}

interface IGameModeStats {
    assists: number;
    boosts: number;
    dBNOs: number;
    dailyKills: number;
    damageDealt: number;
    days: number;
    headshotKills: number;
    heals: number;
    killPoints: number;
    kills: number;
    longestKill: number;
    longestTimeSurvived: number;
    losses: number;
    maxKillStreaks: number;
    mostSurvivalTime: number;
    revives: number;
    rideDistance: number;
    roadKills: number;
    roundMostKills: number;
    roundsPlayed: number;
    suicides: number;
    teamKills: number;
    timeSurvived: number;
    top10s: number;
    vehicleDestroys: number;
    walkDistance: number;
    weaponsAcquired: number;
    weeklyKills: number;
    winPoints: number;
    wins: number;

    isEmpty(): boolean;
}
