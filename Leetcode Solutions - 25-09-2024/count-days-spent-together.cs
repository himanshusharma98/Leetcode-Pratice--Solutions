public class Solution
{
    public int CountDaysTogether(string arriveAlice, string leaveAlice, string arriveBob, string leaveBob)
    {
        return GetDaysOfYear(arriveAlice, leaveAlice).Where(x => GetDaysOfYear(arriveBob, leaveBob).Contains(x)).Count();
    }

    public List<int> GetDaysOfYear(string start, string stop)
    {
        // Choose a non leap year, eg 2001
        int startDayOfYear = DateTime.Parse("2001-" + start).DayOfYear;
        return Enumerable.Range(startDayOfYear, (DateTime.Parse("2001-" + stop).DayOfYear - startDayOfYear) + 1).ToList();
    }
}