using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Korizza.Models
{
    public class Voucher
    {
        [Key]
        public int VoucherId { get; set; }
        public string VoucherName { get; set; }
        public string VoucherShortDescription { get; set; }
        public string VoucherLongDescription { get; set; }
        public string Image { get; set; }
        public ushort Price { get; set; }
        public bool IsFavorite { get; set; }
        public bool IsAvalible { get; set; }
        public int CategoryId { get; set; }

        public virtual Country Country { get; set; }
    }
}
