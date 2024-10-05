using System;
using System.Collections.Generic;

public class Solution
{
    private static readonly int TURN_RIGHT = -1;
    private static readonly int TURN_LEFT = -2;
    private static readonly int SUPPLEMENT_TO_PRIME_NUMBER = 29;

    private static readonly int[] NORTH = { 0, 1 };
    private static readonly int[] EAST = { 1, 0 };
    private static readonly int[] SOUTH = { 0, -1 };
    private static readonly int[] WEST = { -1, 0 };
    private static readonly int[] RANGE_OF_COORDINATES = { -3 * (int)Math.Pow(10, 4), 3 * (int)Math.Pow(10, 4) };

    private static readonly int[][] DIRECTIONS = { NORTH, EAST, SOUTH, WEST };

    public int RobotSim(int[] commands, int[][] obstacles)
    {
        HashSet<int> quickAccessToHashObstacles = CreateQuickAccessToHashObstacles(obstacles);

        int indexDirection = 0;
        int[] currentCoordinates = { 0, 0 };
        int maxSquaredEuclideanDistance = 0;

        foreach (int command in commands)
        {
            if (command == TURN_LEFT || command == TURN_RIGHT)
            {
                indexDirection = CalculateNewIndexDirection(command, indexDirection);
                continue;
            }

            for (int step = 1; step <= command; ++step)
            {
                int nextX = currentCoordinates[0] + DIRECTIONS[indexDirection][0];
                int nextY = currentCoordinates[1] + DIRECTIONS[indexDirection][1];

                if (quickAccessToHashObstacles.Contains(CalculateHashCoordinates(nextX, nextY)))
                {
                    break;
                }

                currentCoordinates[0] = nextX;
                currentCoordinates[1] = nextY;
                int currentDistanceFromStart = CalculateDistanceFromStart(currentCoordinates);

                if (maxSquaredEuclideanDistance < currentDistanceFromStart)
                {
                    maxSquaredEuclideanDistance = currentDistanceFromStart;
                }
            }
        }

        return maxSquaredEuclideanDistance;
    }

    private int CalculateNewIndexDirection(int turn, int indexDirection)
    {
        if (turn == TURN_RIGHT)
        {
            return (indexDirection + 1) % DIRECTIONS.Length;
        }
        else if (turn == TURN_LEFT)
        {
            return (indexDirection + DIRECTIONS.Length - 1) % DIRECTIONS.Length;
        }
        return indexDirection;
    }

    private int CalculateDistanceFromStart(int[] currentCoordinates)
    {
        return currentCoordinates[0] * currentCoordinates[0] + currentCoordinates[1] * currentCoordinates[1];
    }

    private HashSet<int> CreateQuickAccessToHashObstacles(int[][] obstacles)
    {
        HashSet<int> quickAccessToHashObstacles = new HashSet<int>();
        foreach (int[] coordinates in obstacles)
        {
            quickAccessToHashObstacles.Add(CalculateHashCoordinates(coordinates[0], coordinates[1]));
        }
        return quickAccessToHashObstacles;
    }

    private int CalculateHashCoordinates(int x, int y)
    {
        return x + y * (2 * RANGE_OF_COORDINATES[1] + SUPPLEMENT_TO_PRIME_NUMBER);
    }
}