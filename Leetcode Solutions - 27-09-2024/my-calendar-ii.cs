using System;
using System.Collections.Generic;

public class MyCalendarTwo {
    private List<int> singleBooked;
    private List<int> doubleBooked;

    public MyCalendarTwo() {
        singleBooked = new List<int>();
        doubleBooked = new List<int>();
    }

    public bool Book(int start, int end) {
        if (Intersection(doubleBooked, start, end).Count > 0) {
            return false;
        }

        List<int> inter = Intersection(singleBooked, start, end);
        if (inter.Count > 0) {
            for (int i = 0; i < inter.Count; i += 2) {
                Add(doubleBooked, inter[i], inter[i + 1]);
            }
        }

        Add(singleBooked, start, end);
        return true;
    }

    private List<int> Intersection(List<int> intervals, int s, int e) {
        int l = intervals.BinarySearch(s);
        if (l < 0) l = ~l;
        int r = intervals.BinarySearch(e);
        if (r < 0) r = ~r;

        List<int> intersection = new List<int>();
        if (l % 2 != 0) {
            if (intervals[l] != s) {
                intersection.Add(s);
            } else {
                l++;
            }
        }

        intersection.AddRange(intervals.GetRange(l, r - l));

        if (r % 2 != 0) {
            if (intervals[r - 1] != e) {
                intersection.Add(e);
            } else {
                intersection.RemoveAt(intersection.Count - 1);
            }
        }

        return intersection;
    }

    private void Add(List<int> intervals, int s, int e) {
        int l = intervals.BinarySearch(s);
        if (l < 0) l = ~l;
        int r = intervals.BinarySearch(e);
        if (r < 0) r = ~r;

        List<int> newIntervals = new List<int>();
        if (l % 2 == 0) {
            newIntervals.Add(s);
        }

        if (r % 2 == 0) {
            newIntervals.Add(e);
        }

        intervals.RemoveRange(l, r - l);
        intervals.InsertRange(l, newIntervals);
    }
}  