using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ED.Services
{
    public class PlatformHub : Hub
    {
        public void JoinPlatformGroup(string platformId)
        {
            Groups.Add(Context.ConnectionId, platformId);
        }

        public void NotifyPositionAdded(string platformId, object positionData)
        {
            Clients.Group(platformId).positionAdded(positionData);
        }

        public void NotifyPositionFilled(string platformId, object positionData)
        {
            Clients.Group(platformId).positionFilled(positionData);
        }

        public void NotifyPositionRemoved(string platformId, string positionId)
        {
            Clients.Group(platformId).positionRemoved(positionId);
        }

        public void NotifyPlatformModified(string platformId)
        {
            Clients.Group(platformId).platformModified();
        }
    }
}