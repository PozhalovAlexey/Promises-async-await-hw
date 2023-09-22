import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';
import GameSavingLoader from "./promises";

test('load - parse error', async () => {
    const data = 'test data';
    const error = new Error('Failed to parse data');

    read.mockResolvedValue(data);
    json.mockRejectedValue(error);

    await expect(GameSavingLoader.load()).rejects.toThrowError('Failed to load game saving');
    expect(read).toHaveBeenCalledTimes(1);
    expect(json).toHaveBeenCalledTimes(1);
    expect(json).toHaveBeenCalledWith(data);
});