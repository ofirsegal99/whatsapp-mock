
export function getFormattedLastSeen(lastSeen:Date){
    const currentDate = new Date()
    const lastSeenDate = new Date(lastSeen);
    const isSameDay = (date1: Date, date2: Date): boolean => {
        return (
          date1.getFullYear() === date2.getFullYear() &&
          date1.getMonth() === date2.getMonth() &&
          date1.getDate() === date2.getDate()
        );
      };
    
    const isYesterday = (date1: Date, date2: Date): boolean => {
        const yesterday = new Date(date1);
        yesterday.setDate(yesterday.getDate() - 1);
        return isSameDay(yesterday, date2);
      };
  
      const isWithinPastWeek = (date1: Date, date2: Date): boolean => {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const diffDays = Math.round(Math.abs((date1.getTime() - date2.getTime()) / (oneDay)));
        return diffDays <= 7;
      };
  
      if (isSameDay(currentDate, lastSeenDate)) {
        const currentTime = lastSeenDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `Today ${currentTime}`;
      } else if (isYesterday(currentDate, lastSeenDate)) {
        const currentTime = lastSeenDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `Yesterday ${currentTime}`;
      } else if (isWithinPastWeek(currentDate, lastSeenDate)) {
        const day = lastSeenDate.toLocaleDateString([], { weekday: 'long' });
        const currentTime = lastSeenDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `${day} ${currentTime}`;
      } else {
        return lastSeenDate.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      }
}



export function getFormattedDatesForHeader(date:Date){
  const currentDate = new Date()
  const checkedDate = new Date(date);
  const isSameDay = (date1: Date, date2: Date): boolean => {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    };
  
  const isYesterday = (date1: Date, date2: Date): boolean => {
      const yesterday = new Date(date1);
      yesterday.setDate(yesterday.getDate() - 1);
      return isSameDay(yesterday, date2);
    };

    const isWithinPastWeek = (date1: Date, date2: Date): boolean => {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const diffDays = Math.round(Math.abs((date1.getTime() - date2.getTime()) / (oneDay)));
      return diffDays <= 7;
    };

    if (isSameDay(currentDate, checkedDate)) {
      return `Today`;
    } else if (isYesterday(currentDate, checkedDate)) {
      return `Yesterday`;
    } else if (isWithinPastWeek(currentDate, checkedDate)) {
      const day = checkedDate.toLocaleDateString([], { weekday: 'long' });
      return `${day}`;
    } else {
      return checkedDate.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
}