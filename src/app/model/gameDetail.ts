interface IPlayerMatches {
    matches: Array<IPlayerMatchDetail>;
}

interface IPlayerMatchDetail {
    'matchId': string;
    'gemeMode': string;
    'shardId': string;
    'mapName': string;
    'createdAt': string;
    'duration': number;
    'DBNOs': number;
    'assists': number;
    'boosts': number;
    'damageDealt': number;
    'deathType': string;
    'headshotKills': number;
    'heals': number;
    'killPlace': number;
    'killPoints': number;
    'killPointsDelta': number;
    'killStreaks': number;
    'kills': number;
    'lastKillPoints': number;
    'lastWinPoints': number;
    'longestKill': number;
    'mostDamage': number;
    'name': string;
    'playerId': string;
    'revives': number;
    'rideDistance': number;
    'roadKills': number;
    'swimDistance': number;
    'teamKills': number;
    'timeSurvived': number;
    'vehicleDestroys': number;
    'walkDistance': number;
    'weaponsAcquired': number;
    'winPlace': number;
    'winPoints': number;
    'winPointsDelta': number;
}
